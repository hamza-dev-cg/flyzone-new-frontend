import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { toast } from "react-toastify";

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { event_id } = useParams();
  const [amount, setAmount] = useState(1500);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const storedTotalAmount = parseInt(localStorage.getItem("total_amount")) || 0;
  const subTotal = amount + storedTotalAmount;
  const convenience_fee = selectedOption === "cash" ? 0 : (4 / 100) * subTotal;
  const total = subTotal + convenience_fee;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      toast.error("Authentication token is missing.", { autoClose: 3000 });
      setLoading(false);
      return;
    }
    if (!stripe || !elements) {
      toast.error("Stripe is not properly initialized.", { autoClose: 3000 });
      setLoading(false);
      return;
    }

    let formData = {
      amount: total,
      purpose: "Subscription Payment",
      payment_method: selectedOption,
      token: null,
      currency: "USD",
      eventId: event_id
    };

    if (selectedOption === "card") {
      const cardElement = elements.getElement(CardElement);
      if (!cardElement) {
        toast.error("Card element not found.", { autoClose: 3000 });
        setLoading(false);
        return;
      }

      const { error: stripeError, token } = await stripe.createToken(cardElement);
      if (stripeError) {
        setError(stripeError.message);
        setLoading(false);
        return;
      }

      if (!token) {
        setError("Stripe token generation failed.");
        setLoading(false);
        return;
      }

      formData.token = token.id;
    }

    try {
      const response = await axios.post(
        "http://172.229.220.21:8000/api/registration/payment/west-and-meat-fish",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (response?.data?.success) {
        toast.success(response?.data?.message, { autoClose: 3000 });
        localStorage.removeItem("formStep");
        localStorage.removeItem("total_amount");
        setTimeout(() => navigate("/"), 2000);
      }
    } catch (err) {
      console.error("API Error:", err);
    } finally {
      setLoading(false);
    }
  };




  return (
    <div className="container mt-3 event-payment-card">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Payment Details</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3 d-flex justify-content-between">
                  <label>Registration Fee</label>
                  <span>${amount}</span>
                </div>
                <div className="mb-3 d-flex justify-content-between">
                  <label>Optional</label>
                  <span>${storedTotalAmount}</span>
                </div>
                <div className="mb-3 d-flex justify-content-between add-border">
                  <label>SubTotal</label>
                  <span>${subTotal}</span>
                </div>
                {selectedOption === "card" && (
                  <>
                    <div className="mb-3 d-flex justify-content-between ">
                      <label>Convenience Fee 4%</label>
                      <span>${convenience_fee.toFixed(2)}</span>
                    </div>
                    <div className="mb-3 d-flex justify-content-between">
                      <label>Total</label>
                      <span>${total.toFixed(2)}</span>
                    </div></>)}
                <h2 className="card-title  mb-4">Select Payment Method</h2>
                <div className="d-flex justify-content-between mb-3 radio-payment">
                  <label className="d-flex align-items-center gap-2 text-nowrap">
                    <input type="radio" checked={selectedOption === "cash"} name="cash" onChange={(event) => setSelectedOption(event.target.value)} value="cash" /> Cash/Cheque
                  </label>
                  <label className="d-flex align-items-center gap-2 text-nowrap info-icon">
                    <input type="radio" checked={selectedOption === "card"} value="card" onChange={(event) => setSelectedOption(event.target.value)} /> Card Payment <FaInfoCircle />
                    <span className="tooltip-texts">Payment on Card charge 4% convenience fee</span>
                  </label>

                </div>
                {selectedOption === "card" &&
                  <div className="mb-3">
                    <label className="form-label">Card Details</label>
                    <div className="form-control" style={{ padding: "10px" }}>
                      <CardElement
                        options={{
                          style: {
                            base: {
                              fontSize: "16px",
                              color: "#424770",
                              "::placeholder": {
                                color: "#aab7c4",
                              },
                            },
                            invalid: {
                              color: "#9e2146",
                            },
                          },
                        }}
                      />
                    </div>
                  </div>
                }

                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}

                <button type="submit" className="btn btn-primary w-100" disabled={!stripe || loading || selectedOption === ""}>
                  {loading ? "Processing..." : "Pay"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;
