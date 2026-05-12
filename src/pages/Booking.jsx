import React from "react";

import { useParams } from "react-router-dom";

import { useState } from "react";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import API from "../services/api";

import { motion } from "framer-motion";

function Booking() {

  const { id } = useParams();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [startDate, setStartDate] = useState("");

  const [endDate, setEndDate] = useState("");

  const [licenseNumber, setLicenseNumber] =
    useState("");

  const handleBooking = async () => {

    try {

      await API.post("/bookings/create", {

        startDate,
        endDate,
        licenseNumber,

        user: {
          id: user.id,
        },

        car: {
          id: id,
        },

      });

      alert("Booking created successfully!");

    } catch (error) {

      console.error(error);

      alert("Booking failed");

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

        <div className="row justify-content-center">

          <motion.div
            className="col-lg-6"

            initial={{
              opacity: 0,
              y: 60,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.8,
            }}
          >

            <div
              className="card border-0 shadow-lg rounded-4 p-5"

              style={{
                backgroundColor: "#111C34",
              }}
            >

              {/* TITLE */}

              <div className="text-center mb-4">

                <p
                  style={{
                    color: "#D4AF37",
                    letterSpacing: "2px",
                    fontWeight: "bold",
                  }}
                >
                  RENT YOUR DREAM CAR
                </p>

                <h1
                  className="fw-bold"

                  style={{
                    fontSize: "3rem",
                  }}
                >
                  Book Car
                </h1>

                <p
                  style={{
                    color: "#CBD5E1",
                  }}
                >
                  Fill the details to confirm your booking
                </p>

              </div>

              {/* START DATE */}

              <div className="mb-3">

                <label className="mb-2 fw-bold">
                  Start Date
                </label>

                <input
                  type="date"

                  className="form-control p-3 rounded-pill"

                  value={startDate}

                  onChange={(e) =>
                    setStartDate(e.target.value)
                  }
                />

              </div>

              {/* END DATE */}

              <div className="mb-3">

                <label className="mb-2 fw-bold">
                  End Date
                </label>

                <input
                  type="date"

                  className="form-control p-3 rounded-pill"

                  value={endDate}

                  onChange={(e) =>
                    setEndDate(e.target.value)
                  }
                />

              </div>

              {/* LICENSE */}

              <div className="mb-4">

                <label className="mb-2 fw-bold">
                  License Number
                </label>

                <input
                  type="text"

                  placeholder="Enter License Number"

                  className="form-control p-3 rounded-pill"

                  value={licenseNumber}

                  onChange={(e) =>
                    setLicenseNumber(e.target.value)
                  }
                />

              </div>

              {/* BUTTON */}

              <motion.button
                whileHover={{
                  scale: 1.03,
                }}

                whileTap={{
                  scale: 0.95,
                }}

                className="btn w-100 p-3"

                style={{
                  backgroundColor: "#D4AF37",
                  color: "#0B1426",
                  borderRadius: "30px",
                  border: "none",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                }}

                onClick={handleBooking}
              >
                Confirm Booking
              </motion.button>

            </div>

          </motion.div>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Booking;