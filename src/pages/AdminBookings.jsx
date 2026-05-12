import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";
import Footer from "../components/Footer";

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
    <div
      style={{
        backgroundColor: "#0B1426",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Navbar />

      <div className="container py-5">
        
        {/* HEADER */}

        <div className="text-center mb-5">

          <p
            style={{
              color: "#D4AF37",
              letterSpacing: "2px",
              fontWeight: "bold",
            }}
          >
            ADMIN PANEL
          </p>

          <h1
            className="fw-bold"
            style={{
              fontSize: "3rem",
            }}
          >
            All Bookings
          </h1>

          <p
            style={{
              color: "#CBD5E1",
            }}
          >
            Manage customer bookings easily
          </p>

        </div>

        {/* TABLE CARD */}

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
                    ID
                  </th>

                  <th
                    style={{
                      color: "#D4AF37",
                    }}
                  >
                    Customer
                  </th>

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
                    License
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
                    Actions
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

                      {/* ID */}

                      <td>
                        #{booking.id}
                      </td>

                      {/* CUSTOMER */}

                      <td>

                        <div className="fw-bold">
                          {booking.user?.name}
                        </div>

                        <small
                          style={{
                            color: "#CBD5E1",
                          }}
                        >
                          {booking.user?.email}
                        </small>

                      </td>

                      {/* CAR */}

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

                      {/* DATES */}

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

                      {/* LICENSE */}

                      <td>
                        {booking.licenseNumber}
                      </td>

                      {/* STATUS */}

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

                      {/* PAYMENT */}

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

                      {/* ACTIONS */}

                      <td>

                        <div className="d-flex gap-2">

                          <button
                            className="btn btn-sm"

                            style={{
                              backgroundColor: "#198754",
                              color: "white",
                              borderRadius: "20px",
                              padding: "8px 16px",
                              border: "none",
                              fontWeight: "bold",
                            }}

                            onClick={() =>
                              updateStatus(
                                booking.id,
                                "APPROVED"
                              )
                            }
                          >
                            Approve
                          </button>

                          <button
                            className="btn btn-sm"

                            style={{
                              backgroundColor: "#DC3545",
                              color: "white",
                              borderRadius: "20px",
                              padding: "8px 16px",
                              border: "none",
                              fontWeight: "bold",
                            }}

                            onClick={() =>
                              updateStatus(
                                booking.id,
                                "REJECTED"
                              )
                            }
                          >
                            Reject
                          </button>

                        </div>

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

export default AdminBookings;