import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.email && form.password) {
            setLoading(true);
            try {
                const response = await fetch("http://localhost:3000/users/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(form),
                });

                if (response.ok) {
                    await response.json();
                    navigate("/dashboard");
                } else {
                    const errorData = await response.json();
                    alert(errorData.error || "Error logging in");
                }
            } catch (err) {
                alert("Error submitting login form");
            } finally {
                setLoading(false);
            }
        } else {
            alert("Please enter all fields");
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    return (
        <StyledWrapper>
            <form className="form" onSubmit={handleSubmit}>
                <p className="title">Login</p>
                <p className="message">Login now and get full access to our app.</p>
                <label>
                    <input
                        required
                        type="email"
                        className="input"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                    />
                    <span>Email</span>
                </label>
                <label>
                    <input
                        required
                        type="password"
                        className="input"
                        name="password"
                        value={form.password}
                        onChange={handleInputChange}
                    />
                    <span>Password</span>
                </label>
                <button type="submit" className="submit">
                    {loading ? "Loading..." : "Login"}
                </button>
                <p className="signin">
                    Don't have an account? <a href="/register">Register</a>
                </p>
            </form>
        </StyledWrapper>
    );
};

export default Login;

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 350px;
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    position: relative;
  }

  .title {
    font-size: 28px;
    color: royalblue;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }

  .title::before, .title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: royalblue;
  }

  .title::before {
    width: 18px;
    height: 18px;
    background-color: royalblue;
  }

  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }

  .message, .signin {
    color: rgba(88, 87, 87, 0.822);
    font-size: 14px;
  }

  .signin {
    text-align: center;
  }

  .signin a {
    color: royalblue;
  }

  .signin a:hover {
    text-decoration: underline royalblue;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
  }

  .form label .input + span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:placeholder-shown + span {
    top: 15px;
    font-size: 0.9em;
  }

  .form label .input:focus + span, .form label .input:valid + span {
    top: 30px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .form label .input:valid + span {
    color: green;
  }

  .submit {
    border: none;
    outline: none;
    background-color: royalblue;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transition: 0.3s ease;
  }

  .submit:hover {
    background-color: rgb(56, 90, 194);
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }
    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }
`;