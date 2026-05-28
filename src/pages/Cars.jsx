import React from 'react'
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer';

function Cars() {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();
  const [brand, setBrand] = useState("");

  const [model, setModel] = useState("");

  const [type, setType] = useState("");

  const [pricePerDay, setPricePerDay] = useState("");

  const [imageUrl, setImageUrl] = useState("");

  const [editId, setEditId] = useState(null);

  const user = JSON.parse(
    localStorage.getItem("user")
  );

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

  const addCar = async () => {

    try {

      await API.post("/cars/add", {

        brand,
        model,
        type,
        pricePerDay,
        imageUrl,

        status: "AVAILABLE"

      });

      alert("Car Added Successfully");

      fetchCars();

      setBrand("");
      setModel("");
      setType("");
      setPricePerDay("");
      setImageUrl("");

    } catch (error) {

      console.error(error);

      alert("Failed to add car");
    }
  };
  const updateCar = async () => {

    try {

      await API.put(`/cars/update/${editId}`, {

        brand,
        model,
        type,
        pricePerDay,
        imageUrl,

        status: "AVAILABLE"

      });

      alert("Car Updated Successfully");

      fetchCars();

      setEditId(null);

      setBrand("");
      setModel("");
      setType("");
      setPricePerDay("");
      setImageUrl("");

    } catch (error) {

      console.error(error);

      alert("Update Failed");

    }
  };
  const deactivateCar = async (id) => {

    try {

      await API.put(`/cars/deactivate/${id}`);

      alert("Car Removed Successfully");

      fetchCars();

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data ||
        "Cannot remove booked car"
      );
    }
  };
  const editCar = (car) => {

    setEditId(car.id);

    setBrand(car.brand);

    setModel(car.model);

    setType(car.type);

    setPricePerDay(car.pricePerDay);

    setImageUrl(car.imageUrl);
  };


  return (

    <div>

      <Navbar />

      {
        user?.role === "ADMIN" && (

          <div
            className="container py-5"
          >

            <div
              className="card border-0 shadow-lg rounded-4 p-4"

              style={{
                backgroundColor: "#111C34",
                color: "white",
              }}
            >

              <h2
                className="mb-4 fw-bold"

                style={{
                  color: "#D4AF37",
                }}
              >
                {
                  editId
                    ? "Update Car"
                    : "Add New Car"
                }
              </h2>
              <div className="row">

                <div className="col-md-4 mb-3">

                  <input
                    type="text"

                    placeholder="Brand"

                    className="form-control p-3 rounded-pill"

                    value={brand}

                    onChange={(e) =>
                      setBrand(e.target.value)
                    }
                  />

                </div>

                <div className="col-md-4 mb-3">

                  <input
                    type="text"

                    placeholder="Model"

                    className="form-control p-3 rounded-pill"

                    value={model}

                    onChange={(e) =>
                      setModel(e.target.value)
                    }
                  />

                </div>

                <div className="col-md-4 mb-3">

                  <input
                    type="text"

                    placeholder="Type"

                    className="form-control p-3 rounded-pill"

                    value={type}

                    onChange={(e) =>
                      setType(e.target.value)
                    }
                  />

                </div>

                <div className="col-md-6 mb-3">

                  <input
                    type="number"

                    placeholder="Price Per Day"

                    className="form-control p-3 rounded-pill"

                    value={pricePerDay}

                    onChange={(e) =>
                      setPricePerDay(e.target.value)
                    }
                  />

                </div>

                <div className="col-md-6 mb-3">

                  <input
                    type="text"

                    placeholder="Image URL"

                    className="form-control p-3 rounded-pill"

                    value={imageUrl}

                    onChange={(e) =>
                      setImageUrl(e.target.value)
                    }
                  />

                </div>

              </div>

              <button
                className="btn mt-3"

                style={{
                  backgroundColor: "#D4AF37",
                  color: "#0B1426",
                  borderRadius: "30px",
                  padding: "12px 30px",
                  fontWeight: "bold",
                  border: "none",
                }}

                onClick={
                  editId
                    ? updateCar
                    : addCar
                }
              >
                {
                  editId
                    ? "Update Car"
                    : "Add Car"
                }
              </button>
            </div>

          </div>

        )
      }

      <div
        style={{
          backgroundColor: "#0B1426",
          minHeight: "100vh",
          color: "white",
        }}
      >


        <div className="text-center mb-5">
          <br />
          <br />

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
            cars
              .filter(
                (car) => car.status !== "INACTIVE"
              )
              .map((car) => (

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

                      {
                        user?.role === "ADMIN" && (

                          <div className="d-flex gap-2 mt-4">

                            <button
                              className="btn w-50"

                              style={{
                                backgroundColor: "#D4AF37",
                                color: "#0B1426",
                                borderRadius: "30px",
                                border: "none",
                                fontWeight: "bold",
                              }}

                              onClick={() => editCar(car)}
                            >
                              Edit
                            </button>

                            <button
                              className="btn btn-danger w-50 rounded-pill fw-bold"

                              onClick={() => deactivateCar(car.id)}
                            >
                              Delete
                            </button>

                          </div>

                        )
                      }

                      {
                        user?.role !== "ADMIN" && (

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

                        )
                      }

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
