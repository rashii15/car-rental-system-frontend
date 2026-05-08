import React from 'react'

function Login() {
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
        />

        <input
          type="password"
          placeholder="Enter password"
          className="form-control mb-3"
        />

        <button className="btn btn-primary w-100">
          Login
        </button>
      </div>
    </div>
  )
}

export default Login
