const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    filename: {
         type: String,
          required: true
         },
    path: { 
        type: String,
         required: true },
    contentType: { 
        type: String,
         required: true },
    uploadDate: { 
        type: Date,
        default: Date.now }
});

const clientmodel = mongoose.model('userdoc',clientSchema);

module.exports = clientmodel;