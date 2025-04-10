const signUpauth = (req,res, next) => {
    console.log("hello");
    
    let {name, email, password, age, contact} =req.body

    const emailpattern = /^[a-zA-Z0-9._%+-]{4,}@(gmail\.com|yahoo|\.com|outlook\.com)$/;

    if(!name || !email || !password || !age || !contact){
        return res.status(401).json({serverMsg: "All Fields Compulsary"})
        // return(res.send({
        //status:404,
        //Message: 'data is invalid'}))
    }

    if(name.length < 4){
        return res.status(401).json({serverMsg:"Name Must Be a 4 charcter"})
    }

    if(age < 18){
        return res.status(401).json({serverMsg: "Age Is Less Than 18"})
    }

    if(password.length < 6){
        return res.status(401).json({serverMsg: "Pasword must be a 6 charcter"})
    }
    if(!emailpattern.test(email)){
        res.status(401).json({serverMsg: "Invalid Email"})
    }
    
    next()
}

module.exports = signUpauth