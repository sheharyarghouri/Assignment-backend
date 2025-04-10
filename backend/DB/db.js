require('dotenv').config()
const mongoose = require('mongoose')

console.log(process.env.mongodb_URI);

const dbconnection = async () => {
    try {
        await mongoose.connect(process.env.mongodb_URI)
        console.log('DB Connect Sucessfully');
    }
    catch (error){
        console.log("DB not Connected")
    }
} 

module.exports = dbconnection