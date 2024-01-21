const app = require('../../kernel');

module.exports = new class {

    index = (req, res) => {
        res.locals.appUrl = app.url;
        res.render('content/client/index', {layout: 'layouts/client/main'});
    }

};