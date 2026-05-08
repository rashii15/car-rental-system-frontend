import React from 'react'
import { useState } from "react";
import API from "../services/api";


function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleRegister = async () => {
  
      try {
  
        await API.post("/users/register", {
          name,
          email,
          password,
          role: "CUSTOMER"
        });
  
        alert("Registration successful!");
  
      } catch (error) {
  
        alert("Registration failed");
        console.error(error);
  
      }
    };
  
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
  
        <div className="card shadow p-4" style={{ width: "400px" }}>
  
          <h2 className="text-center text-primary mb-4">
            Register
          </h2>
  
          <input
            type="text"
            placeholder="Enter name"
            className="form-control mb-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
  
          <input
            type="email"
            placeholder="Enter email"
            className="form-control mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
  
          <input
            type="password"
            placeholder="Enter password"
            className="form-control mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
  
          <button
            className="btn btn-primary w-100"
            onClick={handleRegister}
          >
            Register
          </button>
  
        </div>
  
      </div>
    );
  }
  export default Register;