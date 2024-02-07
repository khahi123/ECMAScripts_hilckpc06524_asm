const app = require('../../kernel');
const fs = require('fs');
const path = require('path');

module.exports = new class {

    list = (req, res) => {
        res.locals.appUrl = app.url;
        res.render('content/client/products-list', {layout: 'layouts/client/main'});

    }

    store = (req, res) => {
        const idProduct = req.params.id;
        const dbFilePath = path.join(__dirname, '../../data/db.json');
        
        fs.readFile(dbFilePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading db.json:', err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
    
            try {
                // Parse JSON data
                const jsonData = JSON.parse(data);
    
                // Find the product with the specified id
                const product = jsonData.products.find(p => p.id === parseInt(idProduct));
    
                if (product) {
                    // Render the view with the product data
                    res.locals.appUrl = app.url;
                    res.render('content/client/detail', {layout: 'layouts/client/main', product });
                } else {
                    // Product not found
                    res.status(404).json({ error: 'Product not found' });
                }
            } catch (parseError) {
                console.error('Error parsing db.json:', parseError);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });

    }

}