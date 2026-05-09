import React from 'react'
import Navbar from '../components/Navbar'
import heroImage from "../assets/hero-car.jpg";

function Home() {
    return (

        <div>
    
          <Navbar />
    
          <div
            style={{
              height: "90vh",
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
    
            <div
              style={{
                backgroundColor: "rgba(0,0,0,0.6)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                textAlign: "center",
              }}
            >
    
              <h1
                style={{
                  fontSize: "4rem",
                  fontWeight: "bold",
                }}
              >
                Rent Your Dream Car
              </h1>
    
              <p
                style={{
                  fontSize: "1.3rem",
                  marginTop: "15px",
                }}
              >
                Premium cars at affordable prices
              </p>
    
              <button
                className="btn btn-warning btn-lg mt-4"
              >
                Explore Cars
              </button>
    
            </div>
    
          </div>
    
        </div>
      );
}

export default Home
