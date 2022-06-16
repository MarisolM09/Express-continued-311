const express = require("express");
const bodyParser = require("body-parser");

const contacts = require('./data/contacts');
const vehicles = require('./data/vehicles');
const comments = require('./data/comments');
const products = require('./data/products');

const app = express();

app.use(express.static('public'));

app.use(bodyParser.json());

const port = process.env.PORT || 4001;

// Gets all data
app.get('/data/contacts', (req, res) => res.json(contacts));
app.get('/data/vehicles', (req, res) => res.json(vehicles));
app.get('/data/comments', (req, res) => res.json(comments));
app.get('/data/products', (req, res) => res.json(products));

// Gets one thing
app.get('/data/contacts/:id', (req, res) => {
    res.json(contacts.filter(user => user._id === parseInt(req.params.id)))
  });
  app.get('/data/vehicles/:id', (req, res) => {
    res.json(vehicles.filter(user => user._id === parseInt(req.params.id)))
  });
  app.get('/data/comments/:id', (req, res) => {
    res.json(comments.filter(user => user._id === parseInt(req.params.id)))
  });
  app.get('/data/products/:id', (req, res) => {
    res.json(products.filter(user => user._id === parseInt(req.params.id)))
  });

//  Creates one thing



app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
