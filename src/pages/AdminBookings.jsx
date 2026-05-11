import React from 'react'
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";
import Footer from '../components/Footer';


function AdminBookings() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {

        fetchBookings();

    }, []);

    const fetchBookings = async () => {

        try {

            const response = await API.get("/bookings/all");

            setBookings(response.data);

        } catch (error) {

            console.error(error);

        }
    };

    const updateStatus = async (id, status) => {

        try {

            await API.put(
                `/bookings/update-status/${id}?status=${status}`
            );

            fetchBookings();

        } catch (error) {

            console.error(error);

        }
    };

    return (

        <div>

            <Navbar />

            <div className="card shadow border-0 rounded-4 p-4">

                <h2 className="mb-4">
                    All Bookings
                </h2>

                <div className="table-responsive"></div>

                <table className="table align-middle">

                    <thead>

                        <tr>
                            <th>ID</th>
                            <th>Customer</th>
                            <th>Car</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>License</th>
                            <th>Status</th>
                            <th>Actions</th>
                            <th>Payment</th>
                        </tr>

                    </thead>

                    <tbody>

                        {
                            bookings.map((booking) => (

                                <tr key={booking.id}>

                                    <td>{booking.id}</td>

                                    <td>
                                        {booking.user?.name}
                                    </td>

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
                                        {booking.licenseNumber}
                                    </td>

                                    <td>
                                        {booking.status}
                                    </td>

                                    <td>

                                        <button
                                            className="btn btn-success btn-sm me-2"
                                            onClick={() =>
                                                updateStatus(booking.id, "APPROVED")
                                            }
                                        >
                                            Approve
                                        </button>

                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() =>
                                                updateStatus(booking.id, "REJECTED")
                                            }
                                        >
                                            Reject
                                        </button>

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
            <Footer></Footer>

        </div>
    );
}

export default AdminBookings
