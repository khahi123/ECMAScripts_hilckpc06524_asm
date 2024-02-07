const app = require('../../kernel');

module.exports = new class {

    index = (req, res) => {
        res.locals.appUrl = app.url;
        res.render('content/admin/dashboard', {layout: 'layouts/admin/main'});
    }

};