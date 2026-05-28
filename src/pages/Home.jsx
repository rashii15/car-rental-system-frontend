
import Navbar from '../components/Navbar'
import heroImage from "../assets/hero-car.jpg";
import Footer from '../components/Footer';
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Home() {
  const [brand, setBrand] = useState("");

  const [cars, setCars] = useState([]);

  const navigate = useNavigate();

  const searchCars = async () => {

    try {

      const response = await API.get(
        `/cars/brand/${brand}`
      );

      setCars(response.data);

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


      <div
        style={{
          height: "100vh",
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >

        <div
          style={{
            background:
              "linear-gradient(rgba(11,20,38,0.85), rgba(11,20,38,0.85))",

            height: "100%",

            display: "flex",

            alignItems: "center",
          }}
        >

          <div className="container">

            <div className="row align-items-center">

              <motion.div
                className="col-md-6 text-white"

                initial={{ opacity: 0, x: -100 }}

                animate={{ opacity: 1, x: 0 }}

                transition={{ duration: 1 }}
              >

                <p
                  style={{
                    color: "#D4AF37",
                    fontWeight: "bold",
                    letterSpacing: "2px",
                    fontSize: "1.1rem",
                  }}
                >
                  BOOK A CAR NOW
                </p>

                <h1
                  style={{
                    fontSize: "4.5rem",
                    fontWeight: "800",
                    lineHeight: "1.2",
                  }}
                >
                  The Amazing
                  <br />
                  Ride
                </h1>

                <p
                  style={{
                    marginTop: "20px",
                    fontSize: "1.2rem",
                    color: "#CBD5E1",
                    maxWidth: "500px",
                  }}
                >
                  Ride premium vehicles across Sri Lanka
                  with comfort, luxury, and affordable pricing.
                </p>

                <div className="mt-4">

                  <button
                    className="btn btn-lg me-3"
                    style={{
                      backgroundColor: "#D4AF37",
                      color: "#0B1426",
                      borderRadius: "30px",
                      padding: "12px 30px",
                      border: "none",
                      fontWeight: "bold",
                    }}

                    onClick={() => navigate("/cars")}
                  >
                    Explore Cars
                  </button>

                  <button
                    className="btn btn-outline-light btn-lg rounded-pill px-4"
                    onClick={() => navigate("/About")}
                  >
                    Learn More
                  </button>

                </div>
              </motion.div>

            </div>

          </div>

        </div>

      </div>

      <div className="container">

        <div
          className="card border-0 shadow-lg rounded-4 p-4"

          style={{
            backgroundColor: "#111C34",

            marginTop: "-50px",

            position: "relative",

            zIndex: "10",
          }}
        >

          <div className="row align-items-center">

            <div className="col-md-9 mb-3 mb-md-0">

              <select
                className="form-select p-3 rounded-pill"

                value={brand}

                onChange={(e) =>
                  setBrand(e.target.value)
                }
              >

                <option value="">
                  Select Brand
                </option>

                <option value="Toyota">
                  Toyota
                </option>

                <option value="BMW">
                  BMW
                </option>

                <option value="Honda">
                  Honda
                </option>

                <option value="Audi">
                  Audi
                </option>

                <option value="Ferrari">
                  Ferrari
                </option>

                <option value="Porsche">
                  Porsche
                </option>

                <option value="Lamborghini">
                  Lamborghini
                </option>

                <option value="Suzuki">
                  Suzuki
                </option>

              </select>

            </div>

            <div className="col-md-3">

              <button
                className="btn w-100 p-3"

                style={{
                  backgroundColor: "#D4AF37",
                  color: "#0B1426",
                  borderRadius: "30px",
                  fontWeight: "bold",
                  border: "none",
                }}

                onClick={searchCars}
              >
                Search
              </button>

            </div>

          </div>

        </div>

      </div>

      <div className="container py-5">

        <div className="row">

          {
            cars.map((car) => (

              <div
                className="col-lg-4 col-md-6 mb-4"
                key={car.id}
              >

                <div
                  className="card h-100 border-0 rounded-4 overflow-hidden feature-card"

                  style={{
                    backgroundColor: "#111C34",
                    color: "white",
                  }}
                >

                  <img
                    src={car.imageUrl}

                    className="card-img-top"

                    style={{
                      height: "240px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body p-4">

                    <div className="d-flex justify-content-between">

                      <h4 className="fw-bold">
                        {car.brand}
                      </h4>

                      <span
                        className="badge"

                        style={{
                          backgroundColor: "#D4AF37",
                          color: "#0B1426",
                        }}
                      >
                        {car.type}
                      </span>

                    </div>

                    <p
                      style={{
                        color: "#CBD5E1",
                      }}
                    >
                      {car.model}
                    </p>

                    <h3
                      style={{
                        color: "#D4AF37",
                      }}
                    >
                      Rs. {car.pricePerDay}/day
                    </h3>

                    <button
                      className="btn w-100 mt-3"

                      style={{
                        backgroundColor: "#D4AF37",
                        color: "#0B1426",
                        borderRadius: "30px",
                        fontWeight: "bold",
                      }}
                    >
                      Book Now
                    </button>

                  </div>

                </div>

              </div>

            ))
          }

        </div>

      </div>

      <Footer />

    </div >
  );
}

export default Home
