import React from "react";
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import API from "../services/api";

import { useNavigate } from "react-router-dom";

function MyBookings() {

  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);

  const user = JSON.parse(
    localStorage.getItem("user")
  );

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

    <div
      style={{
        backgroundColor: "#0B1426",
        minHeight: "100vh",
        color: "white",
      }}
    >

      <Navbar />

      <div className="container py-5">

        <div className="text-center mb-5">

          <p
            style={{
              color: "#D4AF37",
              letterSpacing: "2px",
              fontWeight: "bold",
            }}
          >
            CUSTOMER BOOKINGS
          </p>

          <h1
            className="fw-bold"

            style={{
              fontSize: "3rem",
            }}
          >
            My Bookings
          </h1>

          <p
            style={{
              color: "#CBD5E1",
            }}
          >
            Track your car rental bookings and payments
          </p>

        </div>

        <div
          className="card border-0 shadow-lg rounded-4 p-4"

          style={{
            backgroundColor: "#111C34",
          }}
        >

          <div className="table-responsive">

            <table className="table align-middle text-white">

              <thead>

                <tr
                  style={{
                    borderBottom: "1px solid #2A3655",
                  }}
                >

                  <th
                    style={{
                      color: "#D4AF37",
                    }}
                  >
                    Car
                  </th>

                  <th
                    style={{
                      color: "#D4AF37",
                    }}
                  >
                    Dates
                  </th>

                  <th
                    style={{
                      color: "#D4AF37",
                    }}
                  >
                    Status
                  </th>

                  <th
                    style={{
                      color: "#D4AF37",
                    }}
                  >
                    Payment
                  </th>

                  <th
                    style={{
                      color: "#D4AF37",
                    }}
                  >
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {
                  bookings.map((booking) => (

                    <tr
                      key={booking.id}

                      style={{
                        borderBottom: "1px solid #2A3655",
                      }}
                    >

                      <td>

                        <div className="fw-bold">
                          {booking.car?.brand}
                        </div>

                        <small
                          style={{
                            color: "#CBD5E1",
                          }}
                        >
                          {booking.car?.model}
                        </small>

                      </td>

                      <td>

                        <div>
                          {booking.startDate}
                        </div>

                        <small
                          style={{
                            color: "#CBD5E1",
                          }}
                        >
                          to {booking.endDate}
                        </small>

                      </td>

                      <td>

                        <span
                          className={
                            booking.status === "APPROVED"
                              ? "badge bg-success"
                              : booking.status === "REJECTED"
                              ? "badge bg-danger"
                              : "badge bg-warning text-dark"
                          }

                          style={{
                            padding: "10px 14px",
                            borderRadius: "20px",
                          }}
                        >
                          {booking.status}
                        </span>

                      </td>

                      <td>

                        <span
                          className={
                            booking.paymentStatus === "PAID"
                              ? "badge bg-success"
                              : "badge bg-secondary"
                          }

                          style={{
                            padding: "10px 14px",
                            borderRadius: "20px",
                          }}
                        >
                          {booking.paymentStatus}
                        </span>

                      </td>

                      <td>

                        {
                          booking.status === "APPROVED" &&
                          booking.paymentStatus === "PENDING" ? (

                            <button
                              className="btn"

                              style={{
                                backgroundColor: "#D4AF37",
                                color: "#0B1426",
                                borderRadius: "25px",
                                padding: "10px 20px",
                                fontWeight: "bold",
                                border: "none",
                              }}

                              onClick={() =>
                                navigate(
                                  `/payment/${booking.id}`
                                )
                              }
                            >
                              Pay Now
                            </button>

                          ) : (

                            <span
                              style={{
                                color: "#CBD5E1",
                              }}
                            >
                              No Action
                            </span>

                          )
                        }

                      </td>

                    </tr>

                  ))
                }

              </tbody>

            </table>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default MyBookings;