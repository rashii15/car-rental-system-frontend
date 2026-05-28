import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {

    localStorage.removeItem("user");

    navigate("/");

  };

  return (

    <nav
      className="navbar navbar-expand-lg navbar-dark shadow px-4"

      style={{
        backgroundColor: "#0B1426",
      }}
    >

      <Link
        className="navbar-brand fw-bold"

        to="/home"

        style={{
          color: "#D4AF37",
          fontSize: "1.5rem",
        }}
      >
        <i className="bi bi-car-front-fill me-2"></i>

        CarRental
      </Link>

      <button
        className="navbar-toggler border-0 shadow-none"

        type="button"

        data-bs-toggle="collapse"

        data-bs-target="#navbarContent"
      >

        <span
          className="navbar-toggler-icon"
        ></span>

      </button>

      <div
        className="collapse navbar-collapse"

        id="navbarContent"
      >

        <ul className="navbar-nav ms-auto align-items-lg-center">


          <li className="nav-item">

            <Link
              className="nav-link"

              to="/home"
            >
              Home
            </Link>

          </li>

          <li className="nav-item">

            <Link
              className="nav-link"

              to="/cars"
            >
              Cars
            </Link>

          </li>

          {
            user?.role === "ADMIN" && (

              <li className="nav-item">

                <Link
                  className="nav-link"

                  to="/admin"
                >
                  Dashboard
                </Link>

              </li>

            )
          }

          {
            user?.role === "ADMIN" && (

              <li className="nav-item">

                <Link
                  className="nav-link"

                  to="/admin/bookings"
                >
                  Bookings
                </Link>

              </li>

            )
          }

          {/* CUSTOMERS */}

          {
            user?.role === "ADMIN" && (

              <li className="nav-item">

                <Link
                  className="nav-link"

                  to="/customers"
                >
                  Customers
                </Link>

              </li>

            )
          }

          {/* CUSTOMER BOOKINGS */}

          {
            user?.role === "CUSTOMER" && (

              <li className="nav-item">

                <Link
                  className="nav-link"

                  to="/my-bookings"
                >
                  My Bookings
                </Link>

              </li>

            )
          }

          {/* LOGOUT */}

          <li className="nav-item">

            <button
              className="btn ms-lg-3 mt-3 mt-lg-0"

              style={{
                backgroundColor: "#D4AF37",
                color: "#0B1426",
                borderRadius: "25px",
                padding: "8px 20px",
                border: "none",
                fontWeight: "bold",
              }}

              onClick={handleLogout}
            >
              Logout
            </button>

          </li>

        </ul>

      </div>

    </nav>

  );
}

export default Navbar;