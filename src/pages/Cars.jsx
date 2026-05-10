import React from 'react'
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

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
    
          <div className="container mt-5">
    
            <h2 className="text-center mb-5">
              Available Cars
            </h2>
    
            <div className="row">
    
              {
                cars.map((car) => (
    
                  <div className="col-md-4 mb-4" key={car.id}>
    
                    <div className="card shadow">
    
                      <img
                        src={car.imageUrl}
                        className="card-img-top"
                        alt={car.brand}
                        style={{
                          height: "220px",
                          objectFit: "cover"
                        }}
                      />
    
                      <div className="card-body">
    
                        <h5 className="card-title">
                          {car.brand}
                        </h5>
    
                        <p>
                          Price: {car.pricePerDay}
                        </p>
    
                        <p>
                          Status: {car.status}
                        </p>
                        <button
                            className="btn btn-primary w-100"
                            onClick={() => navigate(`/booking/${car.id}`)}
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
    
        </div>
      );
    }
    

export default Cars
