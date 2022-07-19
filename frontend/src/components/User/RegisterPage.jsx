import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// import "../../App.css";
import "./RegisterPage.css";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/user/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          emailId: email,
          mobile: mobile,
          password: password,
          cpassword: cpassword,
        }),
      }).then((res) => {
        res.json().then((result) => {
          console.log(result);
        });
      });
    } catch (err) {
      console.log(err);
    }
    setName("");
    setMobile("");
    setPassword("");
    setEmail("");
    setCpassword("");
    navigate("/");
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={submitHandler}>
        <label>Name</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your name..."
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Mobile number</label>
        <input
          type="number"
          className="registerInput"
          placeholder="Enter your mobile nuber..."
          onChange={(e) => setMobile(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Confirm your password..."
          onChange={(e) => setCpassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/">
          LOGIN
        </Link>
      </button>
    </div>
  );
}
