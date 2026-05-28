import React from "react";

import { useState } from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import API from "../services/api";

import { motion } from "framer-motion";

function Payment() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [cardNumber, setCardNumber] =
    useState("");

  const [cardHolder, setCardHolder] =
    useState("");

  const [expiryDate, setExpiryDate] =
    useState("");

  const [cvv, setCvv] = useState("");

  const handlePayment = async () => {

    try {

      await API.put(
        `/bookings/payment/${id}`
      );

      alert("Payment successful!");

      navigate("/my-bookings");

    } catch (error) {

      console.error(error);

      alert("Payment failed");

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
              scale: 0.9,
            }}

            animate={{
              opacity: 1,
              scale: 1,
            }}

            transition={{
              duration: 0.7,
            }}
          >

            <div
              className="card border-0 shadow-lg rounded-4 overflow-hidden"

              style={{
                backgroundColor: "#111C34",
              }}
            >

              <div
                className="p-5"

                style={{
                  background:
                    "linear-gradient(135deg,#D4AF37,#F5D76E)",

                  color: "#0B1426",
                }}
              >

                <h2 className="fw-bold">
                  Secure Payment
                </h2>

                <p className="mb-0">
                  Complete your booking payment securely
                </p>

              </div>

              <div className="p-5">

                <div className="mb-3">

                  <label className="mb-2 fw-bold " style={{color: "#CBD5E1",}}>
                    Card Number
                  </label>

                  <input
                    type="text"

                    className="form-control p-3 rounded-pill"

                    placeholder="1234 5678 9012 3456"

                    value={cardNumber}

                    onChange={(e) =>
                      setCardNumber(
                        e.target.value
                      )
                    }
                  />

                </div>

                <div className="mb-3">

                  <label className="mb-2 fw-bold" style={{color: "#CBD5E1",}}>
                    Card Holder Name
                  </label>

                  <input
                    type="text"

                    className="form-control p-3 rounded-pill"

                    placeholder="John Doe"

                    value={cardHolder}

                    onChange={(e) =>
                      setCardHolder(
                        e.target.value
                      )
                    }
                  />

                </div>

                <div className="row">

                  <div className="col-md-6 mb-3">

                    <label className="mb-2 fw-bold" style={{color: "#CBD5E1",}}>
                      Expiry Date
                    </label>

                    <input
                      type="text"

                      className="form-control p-3 rounded-pill"

                      placeholder="MM/YY"

                      value={expiryDate}

                      onChange={(e) =>
                        setExpiryDate(
                          e.target.value
                        )
                      }
                    />

                  </div>

                  <div className="col-md-6 mb-3">

                    <label className="mb-2 fw-bold" style={{color: "#CBD5E1",}}>
                      CVV
                    </label>

                    <input
                      type="password"

                      className="form-control p-3 rounded-pill"

                      placeholder="123"

                      value={cvv}

                      onChange={(e) =>
                        setCvv(e.target.value)
                      }
                    />

                  </div>

                </div>

                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}

                  whileTap={{
                    scale: 0.95,
                  }}

                  className="btn w-100 p-3 mt-3"

                  style={{
                    backgroundColor: "#D4AF37",
                    color: "#0B1426",
                    borderRadius: "30px",
                    border: "none",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}

                  onClick={handlePayment}
                >
                  Confirm Payment
                </motion.button>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Payment;