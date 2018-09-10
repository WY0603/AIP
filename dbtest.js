const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true } );

//
/*
const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));*/

//定义一个Schema
var PersonSchema = new mongoose.Schema({
    name:String //定义一个属性name，类型为String
})
// 将该Schema发布为Model

var PersonModel = mongoose.model('Person',PersonSchema);
//var PErsonModel = db.model('Person');

// 用Model创建Entity
var personEntity = new PersonModel({name:'haha22'});

personEntity.save().then(()=>console.log(personEntity.name));

