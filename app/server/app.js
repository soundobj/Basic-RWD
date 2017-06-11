const express = require('express');
const app = express();
const helmet = require('helmet');
const path = require('path');
const exphbs = require('express-handlebars');
const compression = require('compression');
const bodyParser = require('body-parser');
const router = require('./router');

app.use(helmet());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));

// setup view engine
app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'master',
    layoutsDir: path.join(`${__dirname}/../views/layouts`),
    partialsDir: path.join(`${__dirname}/../views/partials`),
    helpers: {
        "log": function(msg) {
            console.log(msg);
        }
    }
}));

app.set('view engine', '.hbs');
app.set('views', path.join(`${__dirname}/../views/pages`));

app.use('*/static', express.static('public'));

app.use(router);

app.use((req, res, next) => {
    const err = new Error('Requested page not found');

    err.status = 404;
    next(err);
});

// Simple error handler
app.use((err, req, res, next) => {
    res.status(err.status || 5000);
    res.render('error', {
        message: err.message
    });
});

module.exports = app;
