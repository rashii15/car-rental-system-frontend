import React from 'react'
import { useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


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

    <div
      style={{
        minHeight: "100vh",

        backgroundImage:
          "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7')",

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* OVERLAY */}

      <div
        style={{
          background:
            "linear-gradient(rgba(11,20,38,0.92), rgba(11,20,38,0.92))",

          minHeight: "100vh",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >

        {/* LOGIN CARD */}

        <motion.div

          initial={{
            opacity: 0,
            y: 50
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 0.8
          }}
        >
          <div
        className="p-5"

        style={{
          width: "420px",

          background: "rgba(255,255,255,0.08)",

          borderRadius: "25px",

          backdropFilter: "blur(15px)",

          border: "1px solid rgba(255,255,255,0.1)",

          color: "white",

          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        }}
      >

          {/* TITLE */}

          <div className="text-center mb-4">

            <h1
              style={{
                color: "#D4AF37",
                fontWeight: "bold",
              }}
            >
              Welcome Back
            </h1>

            <p
              style={{
                color: "#CBD5E1",
              }}
            >
              Login to continue
            </p>

          </div>

          {/* EMAIL */}

          <input
            type="email"

            placeholder="Enter email"

            className="form-control mb-3 p-3 rounded-pill"

            value={email}

            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          {/* PASSWORD */}

          <input
            type="password"

            placeholder="Enter password"

            className="form-control mb-4 p-3 rounded-pill"

            value={password}

            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          {/* BUTTON */}

          <button
            className="btn w-100 p-3"

            style={{
              backgroundColor: "#D4AF37",

              color: "#0B1426",

              borderRadius: "30px",

              fontWeight: "bold",

              border: "none",
            }}

            onClick={handleLogin}
          >
            Login
          </button>

          {/* REGISTER */}

          <p
            className="text-center mt-4"

            style={{
              color: "#CBD5E1",
            }}
          >

            Don't have an account?{" "}

            <Link
              to="/register"

              style={{
                color: "#D4AF37",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Register
            </Link>

          </p>
          </div>

          </motion.div>

      </div>

    </div>
    
    )
}

export default Login
