import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Payment() {
    const { id } = useParams();

    const navigate = useNavigate();
  
    const [cardNumber, setCardNumber] = useState("");
    const [cardHolder, setCardHolder] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");
  
    const handlePayment = async () => {
  
      try {
  
        await API.put(`/bookings/payment/${id}`);
  
        alert("Payment successful!");
  
        navigate("/my-bookings");
  
      } catch (error) {
  
        console.error(error);
  
      }
    };
  
    return (
  
      <div>
  
        <Navbar />
  
        <div className="container mt-5">
  
          <div
            className="card shadow p-4 mx-auto"
            style={{ maxWidth: "500px" }}
          >
  
            <h2 className="text-center mb-4">
              Card Payment
            </h2>
  
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) =>
                setCardNumber(e.target.value)
              }
            />
  
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Card Holder Name"
              value={cardHolder}
              onChange={(e) =>
                setCardHolder(e.target.value)
              }
            />
  
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Expiry Date"
              value={expiryDate}
              onChange={(e) =>
                setExpiryDate(e.target.value)
              }
            />
  
            <input
              type="password"
              className="form-control mb-3"
              placeholder="CVV"
              value={cvv}
              onChange={(e) =>
                setCvv(e.target.value)
              }
            />
  
            <button
              className="btn btn-primary"
              onClick={handlePayment}
            >
              Confirm Payment
            </button>
  
          </div>
  
        </div>
  
      </div>
    );
  }
  

export default Payment
