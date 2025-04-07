import React, { useState, useEffect } from "react";
import EventInformationBg from "../assets/images/event-informat-bg.png";
import EventsNavbar from "../components/EventsNavbar";
import Footer from "../components/Footer";
import Line from "../assets/images/line.png";
import { useForm } from "react-hook-form";
import { Modal, Button, Spinner, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [showLoaderModal, setShowLoaderModal] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [showModalOnRegistrationSuccess, setShowModalOnRegistrationSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [eventPrice, setEventPrice] = useState(0);
  const [checkboxTotal, setCheckboxTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [captainEmail, setCaptainEmail] = useState(null)

  const eventSelected = watch("event");

  const priceMap = {
    overallHeaviest10OfTheTournament: 3000,
    overallHeaviest10OfTheTournamentPerDay: 3000,
    dailyAggregateTop5: 3000,
    heaviestFishOverallWTA: 3000,
  };

  const handleEventChange = (event) => {
    const selectedEvent = event.target.value;

    if (selectedEvent === "Both") {
      setEventPrice(5000);
      setTotalPrice(5000 + checkboxTotal);
    } else {
      setEventPrice(2500);
      setTotalPrice(2500 + checkboxTotal);
    }
  };

  useEffect(() => {
    if (eventSelected === "Both") {
      setValue("bothEvent", true);
    } else {
      setValue("bothEvent", false);
    }
  }, [eventSelected, setValue]);

  // Handle checkbox change
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const price = priceMap[name] || 0;

    const newCheckboxTotal = checked
      ? checkboxTotal + price
      : checkboxTotal - price;

    setCheckboxTotal(newCheckboxTotal);
    setTotalPrice(eventPrice + newCheckboxTotal);
  };

  useEffect(() => {
    // Automatically show the modal when the page loads
    // setShowModal(false);
  }, []);

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  const onSubmit = async (data) => {
    setShowLoaderModal(true);
    setLoading(true);

    const cEmail = watch("captainEmail");
    setCaptainEmail(cEmail)

    const formData = {
      ...data,
      totalPrice,
    };

    try {
      const response = await axios.post(
        "https://flyzone.ai/flyzone_laravel/api/event/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setShowModalOnRegistrationSuccess(true)
        reset(); 
        setEventPrice(0); 
        setCheckboxTotal(0);
        setTotalPrice(0);
      }
      
    } catch (err) {
      console.log(err)
      toast.error(err.message);
    }

    setLoading(false);
    setShowLoaderModal(false);
  };

  return (
    <div>
      {showModal && (
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          centered
          style={{
            maxWidth: "100%",
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <Modal.Body className="text-center">
            <h5>Early Bird Bonus: 20% Off on Hotel Booking!</h5>
            <p>Register for the event before <strong>December 31st</strong> and unlock an exclusive <strong>20% discount</strong>  on your Blue Marlin Cove registration!
            <br></br> 🔔Don’t miss this opportunity to save big while securing your stay.</p>
          </Modal.Body>
          <Modal.Footer>
            <div className="get-service ">
              <Button
                onClick={() => setShowModal(false)}
                className="service-btn1 "
              >
                Close
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      )}
      {showModalOnRegistrationSuccess && (
        <Modal
          show={showModalOnRegistrationSuccess}
          onHide={() => setShowModalOnRegistrationSuccess(false)}
          centered
          style={{
            maxWidth: "100%",
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <Modal.Body className="text-center">
            <h5>🎉 Event Registration Successful!</h5>
            <p>You have successfully registered for the event!</p>
            <p className="mt-1">📩 Please check your email <b>{captainEmail}</b> for confirmation and further details. If you don’t see the email in 
              your inbox, kindly check your spam or junk folder. 📨</p>
          </Modal.Body>
          <Modal.Footer>
            <div className="get-service ">
              <Button
                onClick={() => setShowModalOnRegistrationSuccess(false)}
                className="service-btn1 "
              >
                Close
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      )}

      <section className="register-section">
        <img className="register-bg" src={EventInformationBg} alt="fish" />
        <EventsNavbar />
        <div className="container">
          <h1 className="title my-3">Registration Form</h1>
          <div className="d-flex justify-content-center my-3">
            <img className="img-line" src={Line} alt="line" />
          </div>
        </div>
        <section className="form-section">
          <div className="form-container">
            <h5 className="heading">Information</h5>
            <form className="form-c" onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-12">
                  <div className="mb-3">
                    <label for="event" className="form-label">
                      Select Event
                    </label>
                    <select
                      className="form-select"
                      id="event"
                      {...register("event", { required: "Event is required" })}
                      onChange={handleEventChange}
                    >
                      <option value="">Select Event</option>
                      <option value="Both">Both</option>
                      <option value="Wohoo Fishing Tournament">
                        Wohoo Fishing Tournament
                      </option>
                      <option value="Blue Marlin Cove Championship">
                        Blue Marlin Cove Championship
                      </option>
                    </select>
                    {errors.event && (
                      <span className="text-danger form-label">
                        {errors.event.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="boatName" className="form-label">
                      Boat Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="boatName"
                      {...register("boatName", {
                        required: "Boat Name is required",
                      })}
                    />
                    {errors.boatName && (
                      <span className="text-danger form-label">
                        {errors.boatName.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="boatType" className="form-label">
                      Boat Type
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="boatType"
                      {...register("boatType", {
                        required: "Boat Type is required",
                      })}
                    />
                    {errors.boatType && (
                      <span className="text-danger form-label">
                        {errors.boatType.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="captainName" className="form-label">
                      Captain Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="captainName"
                      {...register("captainName", {
                        required: "Captain Name is required",
                      })}
                    />
                    {errors.captainName && (
                      <span className="text-danger form-label">
                        {errors.captainName.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="captainContact" className="form-label">
                      Captain's Contact
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="captainContact"
                      {...register("captainContact", {
                        required: "Captain's Contact is required",
                      })}
                    />
                    {errors.captainContact && (
                      <span className="text-danger form-label">
                        {errors.captainContact.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-12">
                  <div className="mb-3">
                    <label for="captainEmail" className="form-label">
                      Captain Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="captainEmail"
                      {...register("captainEmail", {
                        required: "Captain Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Please enter a valid email",
                        },
                      })}
                    />
                    {errors.captainEmail && (
                      <span className="text-danger form-label">
                        {errors.captainEmail.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="captainName" className="form-label">
                      Angler Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="anglerName"
                      {...register("anglerName", {
                        required: "Angler Name is required",
                      })}
                    />
                    {errors.anglerName && (
                      <span className="text-danger form-label">
                        {errors.anglerName.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="captainContact" className="form-label">
                      Angler's Contact
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="anglerContact"
                      {...register("anglerContact", {
                        required: "Angler's Contact is required",
                      })}
                    />
                    {errors.anglerContact && (
                      <span className="text-danger form-label">
                        {errors.anglerContact.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="captainName" className="form-label">
                      Angler Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="anglerEmail"
                      {...register("anglerEmail", {
                        required: "Angler Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Please enter a valid email",
                        },
                      })}
                    />
                    {errors.anglerEmail && (
                      <span className="text-danger form-label">
                        {errors.anglerEmail.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="captainContact" className="form-label">
                      Total Crew Members
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="totalCrew"
                      {...register("totalCrew", {
                        required: "Total Crew Members is required",
                        min: {
                          value: 1,
                          message: "At least 1 member is required",
                        },
                      })}
                    />
                    {errors.totalCrew && (
                      <span className="text-danger form-label">
                        {errors.totalCrew.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="info-section">
                  <div className="price-container">
                    <h5
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "#292929",
                      }}
                    >
                      Tournament Entry
                    </h5>
                    <div className="price-section">
                      ${eventPrice === 0 ? 2500 : eventPrice.toLocaleString()}
                    </div>
                  </div>

                  <p style={{ marginTop: "18px" }}>
                    The Entry Fee covers the boat tournament participation and
                    up to 4 registered participants per boat. Boats can{" "}
                    <br></br> have an unlimited number of anglers.
                  </p>
                  <p
                    className=" m-0"
                    style={{
                      marginTop: "8px",
                      fontSize: "12px",
                      fontWeight: "300",
                    }}
                  >
                    *Registration fee is non-refundable within 45 days of
                    beginning of event!
                  </p>
                </div>
                <div className="custom-card-n" style={{ marginTop: "48px" }}>
                  <div className="sub-sec">
                    <span className="card-title">
                      Overall Heaviest 10 Of The Tournament
                    </span>
                    <div className="detail">
                      <div className="s-1">
                        <p>50/30/20</p>
                      </div>
                      <div className="s-2">
                        <span className="card-price">$3,000</span>
                      </div>
                    </div>
                  </div>
                  <div className="c-box">
                    <input
                      type="checkbox"
                      {...register("overallHeaviest10OfTheTournament")}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                </div>
                <div className="custom-card-n">
                  <div className="sub-sec">
                    <span className="card-title">
                      Overall Heaviest 10 Of The Tournament
                    </span>
                    <div className="detail">
                      <div className="s-1">
                        <p>
                          $1500 Per Day, Heaviest Fish Of Each Day Winner Takes
                          All
                        </p>
                      </div>
                      <div className="s-2">
                        <span className="card-price">$3,000</span>
                      </div>
                    </div>
                  </div>
                  <div className="c-box">
                    <input
                      type="checkbox"
                      {...register("overallHeaviest10OfTheTournamentPerDay")}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                </div>

                <div className="custom-card-n">
                  <div className="sub-sec">
                    <span className="card-title">Daily Aggregate Top 5</span>
                    <div className="detail">
                      <div className="s-1">
                        <p>$1500 Per Day 60/40 Split</p>
                      </div>
                      <div className="s-2">
                        <span className="card-price">$3,000</span>
                      </div>
                    </div>
                  </div>
                  <div className="c-box">
                    <input
                      type="checkbox"
                      {...register("dailyAggregateTop5")}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                </div>

                <div className="custom-card-n">
                  <div className="sub-sec">
                    <span className="card-title">
                      Heaviest Fish Overall WTA
                    </span>
                    <div className="detail">
                      <div className="s-1">
                        <p>Heaviest Fish Of The Tournament Winner Takes All</p>
                      </div>
                      <div className="s-2">
                        <span className="card-price">$3,000</span>
                      </div>
                    </div>
                  </div>
                  <div className="c-box">
                    <input
                      type="checkbox"
                      {...register("heaviestFishOverallWTA")}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex gap-2 mt-2">
                    <input
                      id="flexCheckDefault"
                      className="form-check-input form-label"
                      type="checkbox"
                      {...register("termAndConditions", {
                      required: "Please check the terms and conditions to proceed."})
                      }
                    />
                    <label
                      class="form-check-label form-label"
                      for="flexCheckDefault"
                    >
                      I agree to the <a href="/">Terms of Service</a>
                    </label>
                  </div>
                  {errors.termAndConditions && (
                    <span className="text-danger form-label">
                      {errors.termAndConditions.message}
                    </span>
                  )}
                </div>
                <div className="col-md-6">
                  <div className="mb-3 d-flex gap-2 mt-2 justify-content-end">
                    <label className="fw-bold ">
                      Total Price = ${totalPrice.toLocaleString()}
                    </label>
                  </div>
                </div>

                <div class="form-check"></div>
              </div>
              <div className="container">
                <div className="get-service">
                  <button className="service-btn" type="submit">
                    Register Now
                  </button>
                </div>
              </div>
              <div>
                {/* Modal */}
                <Modal
                  show={showLoaderModal}
                  onHide={() => setShowLoaderModal(false)}
                  centered
                  style={{
                    maxWidth: "100%",
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                >
                  <Modal.Body className="text-center " style={{padding:'60px'}}>
                    {loading ? (
                      <>
                        <p>Loading... Please wait.</p>
                        <Spinner
                          animation="border"
                          role="status"
                          style={{ width: "4rem", height: "4rem" }}
                          className="text-primary"
                        />
                      </>
                    ) : (
                      <p>Completed!</p>
                    )}
                  </Modal.Body>
                  {!loading && (
                    <Modal.Footer>
                      <div className="get-service ">
                        <Button
                          onClick={() => setShowLoaderModal(false)}
                          className="service-btn"
                        >
                          Close
                        </Button>
                      </div>
                    </Modal.Footer>
                  )}
                </Modal>

              </div>
            </form>
          </div>

        </section>
      </section>
      <ToastContainer />

      <Footer />
    </div>
  );
};

export default Register;
