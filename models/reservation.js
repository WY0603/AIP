var mongoose = require('mongoose');

// 连接数据库
//mongoose.connect('mongodb://localhost/test', { useMongoClient: true })

var Schema = mongoose.Schema

var reservSchema = new Schema({

  r_id: String,
  u_id: String,
  time: String,
  date: String,
  cusno: String,
  email: String
})

module.exports = mongoose.model('Reservation', reservSchema,"reserv_tab") 