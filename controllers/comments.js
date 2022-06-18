const comments = require('../data/comments');


// gets All Contacts
const list = (req, res) => {
    return res.json(comments);
};


// gets only ONE contact
const show =(req, res) => {
    res.json(comments.filter(user => user._id === parseInt(req.params.id)))
  };


// creates a new contact
const create = (req, res) => {
    const length = comments.length;
    const newAddition = {
      id: length + 1,
      ...req.body
    }
    comments.push(newAddition)
    res.json(comments)
  };


module.exports = {
    list,
    show,
    create
}



