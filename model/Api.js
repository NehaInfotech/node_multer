const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email:{
    type:String,
    required:true
  },

  image:{
    type:String,
    required:true
  }
})
module.exports = mongoose.model('multer', schema);