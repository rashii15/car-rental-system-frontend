import React from 'react'
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function MyBookings() {
    const [bookings, setBookings] = useState([]);

    const user = JSON.parse(localStorage.getItem("user"));
  
    useEffect(() => {
  
      fetchBookings();
  
    }, []);
  
    const fetchBookings = async () => {
  
      try {
  
        const response = await API.get(
          `/bookings/user/${user.id}`
        );
  
        setBookings(response.data);
  
      } catch (error) {
  
        console.error(error);
  
      }
    };
  
    return (
  
      <div>
  
        <Navbar />
  
        <div className="container mt-5">
  
          <h2 className="mb-4">
            My Bookings
          </h2>
  
          <table className="table table-bordered">
  
            <thead>
  
              <tr>
                <th>Car</th>
                <th>Start</th>
                <th>End</th>
                <th>Status</th>
                <th>Payment</th>
              </tr>
  
            </thead>
  
            <tbody>
  
              {
                bookings.map((booking) => (
  
                  <tr key={booking.id}>
  
                    <td>
                      {booking.car?.brand}
                    </td>
  
                    <td>
                      {booking.startDate}
                    </td>
  
                    <td>
                      {booking.endDate}
                    </td>
  
                    <td>
                      {booking.status}
                    </td>
  
                    <td>
                      {booking.paymentStatus}
                    </td>
  
                  </tr>
  
                ))
              }
  
            </tbody>
  
          </table>
  
        </div>
  
      </div>
    );
  }
  

export default MyBookings
