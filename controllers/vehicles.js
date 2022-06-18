const vehicles = require('../data/vehicles');


// gets All Contacts
const list = (req, res) => {
    return res.json(vehicles);
};

// Gets ONE vehicle
const show = (req, res) => {
    res.json(vehicles.filter(user => user._id === parseInt(req.params.id)))
  };

 
//  Creates a vehicle
  const create = (req, res) => {
    const length = vehicles.length;
    const newAdd = {
      id: length + 1,
      ...req.body
    }
    vehicles.push(newAdd)
    res.json(vehicles)
  };

module.exports = {
    list,
    show,
    create
}