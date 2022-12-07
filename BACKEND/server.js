var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 5500;
var app = express();

// Config request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

// Parseo JSON
app.use(express.json());

// Call route
var routes = require('./app/routes/books-route.js');
routes(app);

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

