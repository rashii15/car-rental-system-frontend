import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {

    localStorage.removeItem("user");

    navigate("/");

  };

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">

      <Link className="navbar-brand fw-bold" to="/home">
        CarRental
      </Link>

      <div className="collapse navbar-collapse">

        <ul className="navbar-nav ms-auto">

          <li className="nav-item">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/cars">
              Cars
            </Link>
          </li>

          {
            user?.role === "ADMIN" && (

              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  Dashboard
                </Link>
              </li>

            )
          }

          <li className="nav-item">

            <button
              className="btn btn-danger ms-3"
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
