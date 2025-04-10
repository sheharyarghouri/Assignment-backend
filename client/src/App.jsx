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

          alert(data.message)
        })
    }

    catch (err) {
      alert("bahi error hai")
      console.log(err)
    }
  }

  return (
    <>
      <div className="form">
        <h1><u>Signup</u></h1>
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


