require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const rootDir = process.cwd();
const configs = require('./configs/kernel');
const expressLayout = require('express-ejs-layouts');
const clientRoutes = require('./routes/client');
const adminRoutes = require('./routes/admin');
const apiRoutes = require('./routes/api');

app.port = configs.app.port;

app.url = configs.app.url;

app.use(express.json());

app.use('/public', express.static(path.join(rootDir, 'src/public')));

configs.view_engine(app, path.join(rootDir, '/src'));

app.use(expressLayout);

app.set('layout', path.join(__dirname, 'views/layouts/'));

/* Serving Api routes */

app.use('/' + configs.app.api_prefix, apiRoutes);

/* Serving web routes */

app.use('/', clientRoutes);

app.use('/admin', adminRoutes);





module.exports = app;