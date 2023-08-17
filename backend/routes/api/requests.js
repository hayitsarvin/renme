const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload');
// Load item model
const item = require('../../models/item');
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const Request = require("../../models/request")

router.get('/get/:owner', (req, res) => {
 
Request.find({owner:  req.params.owner})
.then(items => res.json(items))
.catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
      
});
router.get('/get/sent/:customer', (req, res) => {
 
  Request.find({customer:  req.params.customer})
  .then(items => res.json(items))
  .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
        
  });
router.get('/get', (req, res) => {
 
    Request.find( )
    .then(items => res.json(items))
    .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
          
    });
router.post('/', (req, res) => {
   console.log("req req bad" , req.body);
    Request.create(req.body)
      .then(book => res.json({ msg: 'Book added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to addsd this book' }));
  });


router.put('/:id', (req, res) => {
        Request.findByIdAndUpdate(req.params.id, req.body)
      .then(Request => res.json({ msg: 'Updated successfully' }))
      .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
      );
  });


  module.exports = router;