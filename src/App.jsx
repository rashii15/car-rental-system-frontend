import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './pages/Login'
import Register from "./pages/Register";
import ReactDOM from 'react-dom/client';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import Cars from "./pages/Cars";
import Booking from "./pages/Booking";
import AdminBookings from "./pages/AdminBookings";
import MyBookings from "./pages/MyBookings";
import Payment from "./pages/Payment";
import Customers from "./pages/Customers";


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/home" element={<Home />} />

      <Route path="/admin" element={<AdminDashboard />} />

      <Route path="/cars" element={<Cars />} />

      <Route path="/booking/:id" element={<Booking />} />

      <Route path="/admin/bookings" element={<AdminBookings />} />

      <Route path="/my-bookings" element={<MyBookings />} />

      <Route path="/payment/:id" element={<Payment />} />

      <Route path="/customers" element={<Customers />}/>

    </Routes>
  )
}

export default App
