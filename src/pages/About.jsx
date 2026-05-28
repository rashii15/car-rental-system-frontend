import React from "react";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import { motion } from "framer-motion";

import heroImage from "../assets/hero-car.jpg";

function About() {

  return (

    <div
      style={{
        backgroundColor: "#0B1426",
        color: "white",
        minHeight: "100vh",
      }}
    >

      <Navbar />

      <div
        style={{
          height: "70vh",
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >

        <div
          style={{
            background:
              "linear-gradient(rgba(11,20,38,0.85), rgba(11,20,38,0.9))",

            height: "100%",

            display: "flex",

            alignItems: "center",

            justifyContent: "center",

            textAlign: "center",
          }}
        >

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 1,
            }}
          >

            <p
              style={{
                color: "#D4AF37",
                letterSpacing: "3px",
                fontWeight: "bold",
              }}
            >
              ABOUT OUR COMPANY
            </p>

            <h1
              className="fw-bold"

              style={{
                fontSize: "4rem",
              }}
            >
              Premium Car Rentals
            </h1>

            <p
              className="mt-3 mx-auto"

              style={{
                color: "#CBD5E1",
                maxWidth: "700px",
                fontSize: "1.1rem",
              }}
            >
              Experience luxury, comfort, and reliability
              with Sri Lanka’s modern car rental service.
            </p>

          </motion.div>

        </div>

      </div>

      <div className="container py-5">

        <div className="row align-items-center g-5">

          <motion.div
            className="col-lg-6"

            initial={{
              opacity: 0,
              x: -100,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.8,
            }}
          >

            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"

              className="img-fluid rounded-4 shadow-lg"

              style={{
                height: "500px",
                objectFit: "cover",
                width: "100%",
              }}
            />

          </motion.div>

          <motion.div
            className="col-lg-6"

            initial={{
              opacity: 0,
              x: 100,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.8,
            }}
          >

            <p
              style={{
                color: "#D4AF37",
                letterSpacing: "2px",
                fontWeight: "bold",
              }}
            >
              WHO WE ARE
            </p>

            <h2
              className="fw-bold mb-4"

              style={{
                fontSize: "3rem",
              }}
            >
              Drive Your Dream Car Today
            </h2>

            <p
              style={{
                color: "#CBD5E1",
                lineHeight: "2",
              }}
            >
              We provide premium vehicle rental services
              with affordable pricing, luxury vehicles,
              and excellent customer service.
            </p>

            <p
              style={{
                color: "#CBD5E1",
                lineHeight: "2",
              }}
            >
              Whether you need a stylish ride for business,
              travel, or special occasions, our platform
              offers a smooth and secure booking experience.
            </p>

            <div className="row mt-4">

              <div className="col-md-6 mb-3">

                <div
                  className="p-4 rounded-4"

                  style={{
                    backgroundColor: "#111C34",
                  }}
                >

                  <h4
                    style={{
                      color: "#D4AF37",
                    }}
                  >
                    100+
                  </h4>

                  <p className="mb-0">
                    Premium Cars
                  </p>

                </div>

              </div>

              <div className="col-md-6 mb-3">

                <div
                  className="p-4 rounded-4"

                  style={{
                    backgroundColor: "#111C34",
                  }}
                >

                  <h4
                    style={{
                      color: "#D4AF37",
                    }}
                  >
                    24/7
                  </h4>

                  <p className="mb-0">
                    Customer Support
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

      <div className="container pb-5">

        <div className="text-center mb-5">

          <p
            style={{
              color: "#D4AF37",
              letterSpacing: "2px",
              fontWeight: "bold",
            }}
          >
            WHY CHOOSE US
          </p>

          <h2
            className="fw-bold"

            style={{
              fontSize: "3rem",
            }}
          >
            Our Services
          </h2>

        </div>

        <div className="row g-4">

          <div className="col-lg-4">

            <motion.div
              whileHover={{
                y: -10,
              }}

              className="card border-0 rounded-4 p-4 h-100"

              style={{
                backgroundColor: "#111C34",
              }}
            >

              <div
                style={{
                  fontSize: "3rem",
                  color: "#D4AF37",
                }}
              >
                🚘
              </div>

              <h4 className="fw-bold mt-3">
                Luxury Cars
              </h4>

              <p
                style={{
                  color: "#CBD5E1",
                }}
              >
                Choose from modern luxury vehicles
                for a premium driving experience.
              </p>

            </motion.div>

          </div>

          <div className="col-lg-4">

            <motion.div
              whileHover={{
                y: -10,
              }}

              className="card border-0 rounded-4 p-4 h-100"

              style={{
                backgroundColor: "#111C34",
              }}
            >

              <div
                style={{
                  fontSize: "3rem",
                  color: "#D4AF37",
                }}
              >
                💳
              </div>

              <h4 className="fw-bold mt-3">
                Secure Payments
              </h4>

              <p
                style={{
                  color: "#CBD5E1",
                }}
              >
                Safe and reliable online booking
                and payment process.
              </p>

            </motion.div>

          </div>

          <div className="col-lg-4">

            <motion.div
              whileHover={{
                y: -10,
              }}

              className="card border-0 rounded-4 p-4 h-100"

              style={{
                backgroundColor: "#111C34",
              }}
            >

              <div
                style={{
                  fontSize: "3rem",
                  color: "#D4AF37",
                }}
              >
                ⭐
              </div>

              <h4 className="fw-bold mt-3">
                Trusted Service
              </h4>

              <p
                style={{
                  color: "#CBD5E1",
                }}
              >
                Thousands of customers trust our
                rental services across Sri Lanka.
              </p>

            </motion.div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default About;