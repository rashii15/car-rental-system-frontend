import React from 'react'
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer';

function Cars() {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    fetchCars();

  }, []);

  const fetchCars = async () => {

    try {

      const response = await API.get("/cars/all");

      setCars(response.data);

    } catch (error) {

      console.error(error);

    }
  };


  return (

    <div>

      <Navbar />

      <div
        style={{
          backgroundColor: "#0B1426",
          minHeight: "100vh",
          color: "white",
        }}
      >

        <div className="text-center mb-5">

          <p
            style={{
              color: "#D4AF37",
              letterSpacing: "2px",
              fontWeight: "bold",
            }}
          >
            PREMIUM COLLECTION
          </p>

          <h1
            className="fw-bold"
            style={{
              fontSize: "3rem",
            }}
          >
            Available Cars
          </h1>

          <p
            style={{
              color: "#CBD5E1",
            }}
          >
            Choose your perfect ride
          </p>

        </div>

        <div className="row">

          {
            cars.map((car) => (

              <div className="col-lg-4 col-md-6 mb-4">

                <div
                  className="card h-100 border-0 rounded-4 overflow-hidden feature-card"

                  style={{
                    backgroundColor: "#111C34",
                    color: "white",
                  }}
                >

                  {/* IMAGE */}

                  <div
                    style={{
                      overflow: "hidden",
                    }}
                  >

                    <img
                      src={car.imageUrl}
                      className="card-img-top"

                      style={{
                        height: "240px",
                        objectFit: "cover",
                        transition: "0.4s",
                      }}
                    />

                  </div>

                  {/* BODY */}

                  <div className="card-body p-4">

                    <div className="d-flex justify-content-between align-items-center">

                      <h4 className="fw-bold mb-0">
                        {car.brand}
                      </h4>

                      <span
                        className="badge"
                        style={{
                          backgroundColor: "#D4AF37",
                          color: "#0B1426",
                          padding: "8px 12px",
                        }}
                      >
                        {car.type}
                      </span>

                    </div>

                    <p
                      style={{
                        color: "#CBD5E1",
                        marginTop: "10px",
                      }}
                    >
                      {car.model}
                    </p>

                    {/* PRICE */}

                    <h3
                      style={{
                        color: "#D4AF37",
                        fontWeight: "bold",
                      }}
                    >
                      Rs. {car.pricePerDay}
                      <span
                        style={{
                          fontSize: "1rem",
                          color: "#CBD5E1",
                        }}
                      >
                        /day
                      </span>
                    </h3>

                    {/* STATUS */}

                    <div className="mt-3">

                      <span
                        className={
                          car.status === "AVAILABLE"
                            ? "badge bg-success"
                            : "badge bg-danger"
                        }
                      >
                        {car.status}
                      </span>

                    </div>

                    {/* BUTTON */}

                    <button
                      className="btn w-100 mt-4"

                      style={{
                        backgroundColor: "#D4AF37",
                        color: "#0B1426",
                        borderRadius: "30px",
                        padding: "12px",
                        fontWeight: "bold",
                        border: "none",
                      }}

                      onClick={() =>
                        navigate(`/booking/${car.id}`)
                      }
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

      <Footer></Footer>

    </div>
  );
}


export default Cars
