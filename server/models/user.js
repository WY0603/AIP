var mongoose = require('mongoose');

// connect database
//mongoose.connect('mongodb://localhost/test', { useMongoClient: true })

var Schema = mongoose.Schema
// set user schema
var userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: Number,
    enum: [-1, 0, 1],
    default: -1
  },
  birthday: {
    type: Date
  },
  status: {
    type: Number,

    enum: [0, 1, 2],
    default: 0
  }
})

module.exports = mongoose.model('User', userSchema)
