let contacts = require('../data/contacts');

// gets All Contacts
const list = (req, res) => {
    return res.json(contacts);
};

// gets only ONE contact
const show = (req, res) => {
    res.json(contacts.filter(user => user._id === parseInt(req.params.id)))
  };

// creates a new contact
const create = (req, res) => {
    const length = contacts.length;
    const newPerson = {
      id: length + 1,
      ...req.body
    }
    contacts.push(newPerson)
    res.json(contacts)
  };


module.exports = {
    list,
    show,
    create
}