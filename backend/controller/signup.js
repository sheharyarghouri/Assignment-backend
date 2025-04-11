const User = require("../models/userSchemas");
const bcrypt = require("bcrypt"); //for encrypt password in hash 

const signup = async (req, res) => {
    try {
        const { name, email, password, age, contact } = req.body;
        let hashpass = await bcrypt.hash(password, 10);
        console.log(hashpass);

        const existingUser = await User.findOne({ $or: [{ email }, { name }] })
        if (existingUser) {
            return res.status(400).json({ message: "User with this name or email  already exist" })
        }
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
