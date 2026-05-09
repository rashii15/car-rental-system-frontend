import React from 'react'
import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Booking() {
    const { id } = useParams();

    const user = JSON.parse(localStorage.getItem("user"));
  
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [licenseNumber, setLicenseNumber] = useState("");
  
    const handleBooking = async () => {
  
      try {
  
        await API.post("/bookings/create", {
  
          startDate,
          endDate,
          licenseNumber,
  
          user: {
            id: user.id
          },
  
          car: {
            id: id
          }

        });
  
        alert("Booking created successfully!");
  
      } catch (error) {
  
        console.error(error);
  
        alert("Booking failed");
  
      }
    };
  
    return (
  
      <div>
  
        <Navbar />
  
        <div className="container mt-5">
  
          <div className="card p-4 shadow mx-auto" style={{ maxWidth: "500px" }}>
  
            <h2 className="text-center mb-4">
              Book Car
            </h2>
  
            <input
              type="date"
              className="form-control mb-3"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
  
            <input
              type="date"
              className="form-control mb-3"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
  
            <input
              type="text"
              placeholder="License Number"
              className="form-control mb-3"
              value={licenseNumber}
              onChange={(e) => setLicenseNumber(e.target.value)}
            />
  
            <button
              className="btn btn-success"
              onClick={handleBooking}
            >
              Confirm Booking
            </button>
  
          </div>
  
        </div>
  
      </div>
    );
  }

export default Booking
