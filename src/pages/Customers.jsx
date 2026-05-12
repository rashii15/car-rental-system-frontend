import React from "react";
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import API from "../services/api";

function Customers() {

  const [customers, setCustomers] = useState([]);

  useEffect(() => {

    fetchCustomers();

  }, []);

  const fetchCustomers = async () => {

    try {

      const response = await API.get("/users/all");

      setCustomers(response.data);

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
            Customer List
          </h1>

          <p
            style={{
              color: "#CBD5E1",
            }}
          >
            Manage all registered customers
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
                    Name
                  </th>

                  <th
                    style={{
                      color: "#D4AF37",
                    }}
                  >
                    Email
                  </th>

                  <th
                    style={{
                      color: "#D4AF37",
                    }}
                  >
                    Role
                  </th>

                </tr>

              </thead>

              <tbody>

                {
                  customers.map((customer) => (

                    <tr
                      key={customer.id}

                      style={{
                        borderBottom: "1px solid #2A3655",
                      }}
                    >

                      {/* ID */}

                      <td>
                        #{customer.id}
                      </td>

                      {/* NAME */}

                      <td>

                        <div className="fw-bold">
                          {customer.name}
                        </div>

                      </td>

                      {/* EMAIL */}

                      <td>

                        <span
                          style={{
                            color: "#CBD5E1",
                          }}
                        >
                          {customer.email}
                        </span>

                      </td>

                      {/* ROLE */}

                      <td>

                        <span
                          className={
                            customer.role === "ADMIN"
                              ? "badge bg-danger"
                              : "badge bg-success"
                          }

                          style={{
                            padding: "10px 14px",
                            borderRadius: "20px",
                          }}
                        >
                          {customer.role}
                        </span>

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

export default Customers;