// const userModel = require("../models/userSchems")
// const bycrypt = require("bycrypt")

// const signupCON= async => (req,res) {
//     let {name, email, password, age, contact} = req.body    
//     let hashpass = await bycrypt.hash(password, 10)

//     try (
//         let register = await userModel.create({
//             name:name,
//             email:email,
//             passowrd:hashpass,
//             age:age,
//             contact:contact,
//         })
//     )


// }


// module.exports = signupCON

// controllers/signup.js

const User = require("../models/userSchems"); // adjust path as needed
const bcrypt = require("bcrypt");



const signup = async (req, res) => {
    try {
        const { name, email, password, age, contact } = req.body;
        let hashpass = await bcrypt.hash(password, 10);
        console.log(hashpass);

        // Create and save new user
        const newUser = new User({ name, email, password: hashpass, age, contact });
        await newUser.save();

        res.status(201).json({ message: "Signup successful!" });
    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

module.exports = signup;
