import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function AdminDashboard() {
  return (
    <div>
        <Navbar></Navbar>
    <div className="container mt-5">

      <h1 className="text-center text-danger">
        Admin Dashboard
      </h1>

    </div>
    <Footer></Footer>
    </div>
  )
}

export default AdminDashboard
