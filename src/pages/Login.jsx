import React from 'react'
import { useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleLogin = async () => {
      try {
        const response = await API.post("/users/login", {
          email,
          password,
        });
  
        alert("Login successful!");
        
        localStorage.setItem(
          "user",
          JSON.stringify(response.data)
        );

        if (response.data.role === "ADMIN") {
          navigate("/admin");
        } else {       
          navigate("/home"); 
        }
  
        console.log(response.data);
  
      } catch (error) {
        console.error(error);
        alert("Invalid credentials");
        
      }
    };

  return (
<div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "350px" }}>
        <h2 className="text-center text-primary mb-4">
          Login
        </h2>

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
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="text-center mt-3">
            Don't have an account?{" "}
            <Link to="/register">
                Register
            </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
