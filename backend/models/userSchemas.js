const mongoose = require('mongoose')

let schema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: String,
    age: Number,
    contact: String
})

let model = mongoose.model("users", schema)

module.exports = model