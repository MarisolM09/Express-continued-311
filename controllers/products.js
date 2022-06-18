const products = require('../data/products');


// gets All Contacts
const list = (req, res) => {
    return res.json(products);
};


// Gets ONE product
const show =(req, res) => {
    res.json(products.filter(user => user._id === parseInt(req.params.id)))
  };


// Creates new product
const create = (req, res) => {
    const length = products.length;
    const newThing = {
      id: length + 1,
      ...req.body
    }
    products.push(newThing)
    res.json(products)
  };


module.exports = {
    list,
    show,
    create
}