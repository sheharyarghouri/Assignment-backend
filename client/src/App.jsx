import { useState } from 'react';

import './App.css'

function App() {
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    contact: ""
  })

  const handleChange = (e) => {

    setSignupData(
      {
        ...signupData,
        [e.target.name]: e.target.value
      }
    )
  }
  console.log(signupData);

  const signpdata = async () => {
    const { name, email, password, age, contact } = signupData;

    if (!name || !email || !password || !age || !contact) {
      alert("All fields must be  filled!");
      return;
    }

    console.log("email entered", email);
    const emailRegex = /^[a-zA-Z0-9._%+-]{4,}@(gmail\.com|yahoo|\.com|outlook\.com)$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address!");
      return;
    }

    if (signupData.name.length < 4) {
      alert("name must be at least 4 characters long");
      return;
    }
    if (parseInt(age) < 18) {
      alert("Age must be at least 18");
      return;
    }
    if (signupData.password.length < 6) {
      alert("password must be at least 6 characters long");
      return;
    }

    try {
      fetch('http://localhost:5000/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(signupData),
      })
        .then((res) => res.json())
        .then(data => {

          alert(data.message || "Something went wrong, please check your inputs.")
        })
    }

    catch (err) {
      alert("there is error")
      console.log(err)
    }
  }

  return (
    <>
      <div className="form">
        <h1>Sign-up</h1>
        <input type="text" name="name" placeholder="Enter your name" onChange={handleChange} /><br /><br />
        <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} /><br /><br />
        <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} /><br /><br />
        <input type="number" name="age" placeholder="Enter your age" onChange={handleChange} /><br /><br />
        <input type="text" name="contact" placeholder="Enter your contact" onChange={handleChange} /><br /><br />

        <button onClick={signpdata}>Signup</button>
      </div>

    </>
  )
}

export default App


