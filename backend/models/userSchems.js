const mongoose = require('mongoose')

let schema = mongoose.Schema({
    name:String,
    password:String,
    age:Number,
    email:String,
    contact:String
})

let model = mongoose.model("users",schema) 

module.exports = model