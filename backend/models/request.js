const mongoose = require('mongoose');
const RequestSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required:true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'item',
        required:true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        
    },
    status: {
        type:String,
        default:"2"
    },
    startDate: {
        type:Date,
        required:true
    },
    endDate: {
        type:Date,
        required:true
    },
    reasonToRent:{
        type:String,
        
    }
    
  });
  
  module.exports = Request = mongoose.model('request', RequestSchema);