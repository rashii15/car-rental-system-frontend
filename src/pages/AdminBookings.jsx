import React from 'react'
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";


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

            <div className="container mt-5">

                <h2 className="mb-4">
                    All Bookings
                </h2>

                <table className="table table-bordered table-striped">

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

                                </tr>

                            ))
                        }

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default AdminBookings
