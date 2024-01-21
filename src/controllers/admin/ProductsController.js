const app = require('../../kernel');

module.exports = new class {

    list = (req, res) => {
        res.locals.appUrl = app.url;
        res.render('content/admin/product-list', {layout: 'layouts/admin/main'});
    }

    add = (req, res) => {
        console.log(req.body);
        res.locals.appUrl = app.url;
        res.render('content/admin/new-product', {layout: 'layouts/admin/main'});
    }


};