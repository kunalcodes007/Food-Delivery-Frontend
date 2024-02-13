import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Signup() {
  let navigate=useNavigate();
  const [credentials, setcredentials] = useState({
    name: "",
    password: "",
    email: "",
  });
  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      })
    );
    const response = await fetch("http://localhost:5000/api/create-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("authToken", json.authToken);
      navigate("/login")
    }
    else{
      alert("enter valid credentials");
    }
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="type"
              className="form-control"
              id="name"
              name="name"
              value={credentials.name}
              placeholder="Enter Name"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={credentials.email}
              placeholder="Enter Email"
              onChange={onChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              placeholder="Password"
              onChange={onChange}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label
              className="form-check-label"
              for="exampleCheck1"
              name="check"
            >
              Check me out
            </label>
          </div>
          <button type="submit" className="btn m-3 btn-success">
            Submit
          </button>
          <Link to="/login" className="btn btn-danger m-3">
            Alrady a user?
          </Link>
        </form>
      </div>
    </>
  );
}
