import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useNavigate } from "react-router-dom";

function AdminDashboard() {

  const navigate = useNavigate();

  return (

    <div
      style={{
        backgroundColor: "#0B1426",
        minHeight: "100vh",
        color: "white",
      }}
    >

      <Navbar />

      {/* HERO SECTION */}

      <div className="container py-5">

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
            style={{
              fontSize: "3.5rem",
              fontWeight: "bold",
            }}
          >
            Dashboard Overview
          </h1>

          <p
            style={{
              color: "#CBD5E1",
              fontSize: "1.1rem",
            }}
          >
            Manage bookings, cars, and customers
          </p>

        </div>

        {/* DASHBOARD CARDS */}

        <div className="row g-4">

          {/* BOOKINGS */}

          <div className="col-lg-4">

            <div
              className="card border-0 rounded-4 p-4 h-100 feature-card"

              style={{
                backgroundColor: "#111C34",
                color: "white",
              }}
            >

              <div className="card-body">

                <h2
                  style={{
                    color: "#D4AF37",
                    fontSize: "3rem",
                  }}
                >
                  📑
                </h2>

                <h3 className="fw-bold mt-3">
                  Manage Bookings
                </h3>

                <p
                  style={{
                    color: "#CBD5E1",
                  }}
                >
                  Approve or reject customer bookings
                  and monitor payment status.
                </p>

                <button
                  className="btn mt-3"

                  style={{
                    backgroundColor: "#D4AF37",
                    color: "#0B1426",
                    borderRadius: "30px",
                    padding: "12px 25px",
                    fontWeight: "bold",
                    border: "none",
                  }}

                  onClick={() =>
                    navigate("/admin/bookings")
                  }
                >
                  View Bookings
                </button>

              </div>

            </div>

          </div>

          {/* CARS */}

          <div className="col-lg-4">

            <div
              className="card border-0 rounded-4 p-4 h-100 feature-card"

              style={{
                backgroundColor: "#111C34",
                color: "white",
              }}
            >

              <div className="card-body">

                <h2
                  style={{
                    color: "#D4AF37",
                    fontSize: "3rem",
                  }}
                >
                  🚘
                </h2>

                <h3 className="fw-bold mt-3">
                  Manage Cars
                </h3>

                <p
                  style={{
                    color: "#CBD5E1",
                  }}
                >
                  Add new cars, edit availability,
                  and manage pricing.
                </p>

                <button
                  className="btn mt-3"

                  style={{
                    backgroundColor: "#D4AF37",
                    color: "#0B1426",
                    borderRadius: "30px",
                    padding: "12px 25px",
                    fontWeight: "bold",
                    border: "none",
                  }}

                  onClick={() =>
                    navigate("/cars")
                  }
                >
                  Manage Cars
                </button>

              </div>

            </div>

          </div>

          {/* PAYMENTS */}

          <div className="col-lg-4">

            <div
              className="card border-0 rounded-4 p-4 h-100 feature-card"

              style={{
                backgroundColor: "#111C34",
                color: "white",
              }}
            >

              <div className="card-body">

                <h2
                  style={{
                    color: "#D4AF37",
                    fontSize: "3rem",
                  }}
                >
                  💳
                </h2>

                <h3 className="fw-bold mt-3">
                  Payment Status
                </h3>

                <p
                  style={{
                    color: "#CBD5E1",
                  }}
                >
                  Track customer payments and
                  monitor completed transactions.
                </p>

                <button
                  className="btn mt-3"

                  style={{
                    backgroundColor: "#D4AF37",
                    color: "#0B1426",
                    borderRadius: "30px",
                    padding: "12px 25px",
                    fontWeight: "bold",
                    border: "none",
                  }}

                  onClick={() =>
                    navigate("/admin/bookings")
                  }
                >
                  View Payments
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default AdminDashboard;