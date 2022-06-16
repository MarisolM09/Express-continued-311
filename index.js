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
app.post('/data/contacts', (req, res) => {
    const length = contacts.length;
    const newPerson = {
      id: length + 1,
      ...req.body
    }
    contacts.push(newPerson)
    res.json(contacts)
  })

  app.post('/data/vehicles', (req, res) => {
    const length = vehicles.length;
    const newAdd = {
      id: length + 1,
      ...req.body
    }
    vehicles.push(newAdd)
    res.json(vehicles)
  })

  app.post('/data/comments', (req, res) => {
    const length = comments.length;
    const newAddition = {
      id: length + 1,
      ...req.body
    }
    comments.push(newAddition)
    res.json(comments)
  })

  app.post('/data/products', (req, res) => {
    const length = products.length;
    const newThing = {
      id: length + 1,
      ...req.body
    }
    products.push(newThing)
    res.json(products)
  })



app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
