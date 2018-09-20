var mongoose = require('mongoose');

// 连接数据库
//mongoose.connect('mongodb://localhost/test', { useMongoClient: true })

var Schema = mongoose.Schema

var restSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  r_name: String,
  r_address: String,
  r_number: String,
  r_menu: [String],
  r_pic: String,
  r_maxtable: String
})

module.exports = mongoose.model('Restaurant', restSchema,"res_tab")


