import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Stepper, Step } from "react-form-stepper";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import Line from "../../../assets/images/line.png";
import "react-toastify/dist/ReactToastify.css";
import PaymentForm from "../../../components/PaymentForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { setUser } from "../../../features/user/userSlice";
import {
  useUpdateRegisterUserMutation,
  useGetPaymentHistoryMutation,
} from "../../../features/registerMeatFish/api";
import { useEventforPaymentTournamentMutation } from "../../../features/tournaments/api";
import { useParams } from "react-router-dom";
import { convertToFormData } from "../../../utils/helpers";

const stripePromise = loadStripe(
  "pk_live_51QUApaLX0WQuQ4Sa64hLBwBGpGHLYu0LLdzkFs6K8aZYdnkyiNv6LCIFIjjfnauzIBqctAZKqCCyh7wjHG75QJcX00IWLxFAjH"
);
// const stripePromise = loadStripe(
//   "pk_test_51QUrEfBZAGDpCST54w64nCWNe1mLcRN89XQw86WxDSIEXRfOVz1jfIVM5bklMLyMmuaUhcRcO21Vb08g6OcMeJBt00jGMnTbms"
// );

const entrySections = [
  {
    title: "Heaviest Fish",
    options: [
      {
        label: "$500 - Level 1 - Heaviest Fish (65/25/10 Split)",
        amount: 500,
      },
      {
        label: "$1000 - Level 2 - Heaviest Fish (65/25/10 Split)",
        amount: 1000,
      },
      {
        label: "$1500 - Level 3 - Heaviest Fish Winner Take All",
        amount: 1500,
      },
    ],
  },
  {
    title: "Heaviest Stringer",
    options: [
      {
        label: "$500 - Level 1 - Heaviest Stringer (65/25/10 Split)",
        amount: 500,
      },
      {
        label: "$1000 - Level 2 - Heaviest Stringer (65/25/10 Split)",
        amount: 1000,
      },
      {
        label: "$1000 - Level 3 - Heaviest Stringer Winner Take All",
        amount: 1000,
      },
    ],
  },
  {
    title: "Tuna Division",
    options: [
      {
        label: "$500 - Level 1 - Heaviest Tuna (65/25/10 Split)",
        amount: 500,
      },
      {
        label: "$1000 - Level 2 - Heaviest Tuna (65/25/10 Split)",
        amount: 1000,
      },
      {
        label: "$2500 - Level 3 - Heaviest Tuna Winner Take All",
        amount: 2500,
      },
      {
        label:
          "$1000 - Level 4 - Heaviest Stringer - Select Up to 5 Qualifying Tuna (65/25/10 Split)",
        amount: 1000,
      },
    ],
  },
  {
    title: "Meatfish Division",
    options: [
      {
        label: "$500 - Level 1 - Heaviest Dolphin (65/25/10 Split)",
        amount: 500,
      },
      {
        label: "$500 - Level 2 - Heaviest Wahoo (65/25/10 Split)",
        amount: 500,
      },
    ],
  },
  {
    title: "Big Fish Daily",
    options: [
      {
        label:
          "$500 - Level 1 - Heaviest Daily Fish Weighed Each Day (Winner Each Day)",
        amount: 500,
      },
    ],
  },
];

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const userInfo = useSelector((state) => state.user?.user);
  const [loading, setLoading] = useState(false);
  const [selectedEntries, setSelectedEntries] = useState([]);
  const [preSelectedEvents, setPreSelectedEvents] = useState([]);


  const [selectedEvents, setSelectedEvents] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();
  const [formStep, setFormStep] = useState(() => {
    const savedStep = localStorage.getItem("formStep");
    return savedStep ? parseInt(savedStep, 10) : 0;
  });
  useEffect(() => {
    localStorage.setItem("formStep", formStep);
  }, [formStep]);
  const [UpdateRegisterUser] = useUpdateRegisterUserMutation();
  const [userRegisterForEvent] = useEventforPaymentTournamentMutation();
  const [GetPaymentHistory] = useGetPaymentHistoryMutation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetPaymentHistory();
        const storeData = data?.data?.data || [];

        if (storeData.length === 0) {
          setSelectedEvents([]); // Ensure it's empty when there's no data
          return;
        }

        const reversed = [...storeData].reverse();
        const store_events = reversed[0] || {}; // Ensure it's an object

        setSelectedEvents(store_events?.selected_events || []);
        setPreSelectedEvents(store_events?.selected_events || []);

      } catch (error) {
        console.error("Error fetching payment history:", error);
      }
    };
    fetchData();
  }, []);
  const onSubmit = async (data) => {
    if (!data) {
      toast.error("Form submission failed. Required data is missing.");
      return;
    }
    setLoading(true);
    try {
      const res = await UpdateRegisterUser(data);
      if (res?.data?.data) {
        localStorage.setItem("user", JSON.stringify(res.data.data));
        dispatch(setUser({ user: res.data.data }));
      }
      setFormStep((prevStep) => prevStep + 1);
    } catch (err) {
      toast.error("An error occurred while registering. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { }, [formStep]);

  const handleCheckboxChange = (entry) => {
    const value = entry.label.replace(/[()]/g, "").replace(/\s+/g, "-");
    const amount = entry.amount;

    setSelectedEvents((prev) => {
      const isSelected = prev.includes(value);
      const updatedEvents = isSelected
        ? prev.filter((item) => item !== value)
        : [...prev, value];

      setSelectedEntries((prevEntries) => {
        if (isSelected) {
          return prevEntries.filter((a) => a !== amount);
        } else {
          return [...prevEntries, amount];
        }
      });

      return updatedEvents;
    });
  };




  const totalAmount = selectedEntries.reduce(
    (sum, entry) => sum + entry,
    0
  );

  const steps = ["User Details", "Add Optional", "Add Payment"];
  const segments = location.pathname.split("/");
  let firstSegment = segments[1];
  firstSegment = firstSegment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  useEffect(() => {
    if (formStep === 1) {
      localStorage.setItem("total_amount", totalAmount);
      localStorage.setItem("selected_entries", JSON.stringify(selectedEvents));
    }
  }, [totalAmount]);


  return (
    <div>
      <ToastContainer />
      <section className="layout-space register-section">
        <div className="content-center">
          <h1>{firstSegment} Registration Form</h1>
          <img className="responsive-line" src={Line} alt="line" />
        </div>

        <section className="form-section">
          <div className="form-container">
            <Stepper activeStep={formStep}>
              {steps.map((label, index) => (
                <>
                  <div
                    key={index}
                    className="d-flex flex-column align-items-center w-full"
                  >
                    <div
                      className={`rounded-full w-8 h-8 flex items-center justify-center step-stepper text-white ${index === formStep
                        ? "active_step"
                        : index < formStep
                          ? "complete_step"
                          : "in_active"
                        }`}
                    >
                      {index + 1}
                    </div>
                    <span
                      className={`mt-4 fw-bold step-label ${index === formStep
                        ? "active_step_label"
                        : "complete_step_label"
                        }`}
                    >
                      {label}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`step-divider ${index < formStep ? "divider-completed" : ""
                        }`}
                    />
                  )}
                </>
              ))}
            </Stepper>
            {formStep === 0 && (
              <form className="form-c" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register("name", {
                          required: "First name is required",
                        })}
                        value={userInfo?.name}
                        disabled={userInfo?.name}
                      />
                      {errors.name && (
                        <span className="text-danger font-12">
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label">Last Name*</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register("last_name", {
                          required: "Last name is required",
                        })}
                        value={userInfo?.last_name}
                        disabled={userInfo?.last_name}
                      />
                      {errors.last_name && (
                        <span className="text-danger font-12">
                          {errors.last_name.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="col-md-12 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label">Boat Name</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register("boat_name", {
                          required: "Boat name is required",
                        })}
                        value={userInfo?.boat_name}
                        disabled={userInfo?.boat_name}
                      />
                      {errors.boat_name && (
                        <span className="text-danger font-12">
                          {errors.boat_name.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Email*</label>
                      <input
                        type="email"
                        className="form-control"
                        {...register("email", {
                          required: "Email is required",
                        })}
                        value={userInfo?.email}
                        disabled={userInfo?.email}
                      />
                      {errors.email && (
                        <span className="text-danger font-12">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register("address", {
                          required: "Address is required",
                        })}
                        value={userInfo?.address}
                        disabled={userInfo?.address}
                      />
                      {errors?.address && (
                        <span className="text-danger font-12">
                          {errors?.address.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label">City</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register("city", { required: "City is required" })}
                        value={userInfo?.city}
                        disabled={userInfo?.city}
                      />
                      {errors.city && (
                        <span className="text-danger font-12">
                          {errors.city.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label">State</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register("state", {
                          required: "State is required",
                        })}
                        value={userInfo?.state}
                        disabled={userInfo?.state}
                      />
                      {errors.state && (
                        <span className="text-danger font-12">
                          {errors.state.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label">Zip</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register("zip", { required: "Zip is required" })}
                        value={userInfo?.zip}
                        disabled={userInfo?.zip}
                      />
                      {errors.zip && (
                        <span className="text-danger font-12">
                          {errors.zip.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label">Phone</label>
                      <input
                        type="number"
                        className="form-control"
                        {...register("phone", {
                          required: "Phone is required",
                        })}
                        value={userInfo?.phone}
                        disabled={userInfo?.phone}
                      />
                      {errors.phone && (
                        <span className="text-danger font-12">
                          {errors.phone.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="container">
                    <div className="get-service space-remove">
                      <button className="service-btn" type="submit">
                        {loading ? "Loading...." : "Next"}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            )}
            {formStep === 1 && (
              <>
                <div className="rules-s-container mb-4">
                  <div className="rules-s-container">
                    <div className="rule-description">
                      <p>
                        <strong>Tournament </strong>
                      </p>
                      <ul className="list-none">
                        <li>
                          <label className="mb-2 d-block">
                            <input type="checkbox" checked />
                            Tournament registration Fee: <b>$1500</b>
                          </label>
                        </li>
                      </ul>
                    </div>
                    {entrySections.map((section, idx) => (
                      <div key={idx} className="rule-description">
                        <p>
                          <strong>{section.title}</strong>
                        </p>
                        <ul>
                          {section.options.map((entry, i) => {
                            const value = entry.label.replace(/[()]/g, "").replace(/\s+/g, "-");
                            const isChecked = selectedEvents?.includes(value);
                            const isDisabled = preSelectedEvents?.includes(value); 
                            return (
                              <li key={i}>
                                <label>
                                  <input
                                    type="checkbox"
                                    value={value}
                                    checked={isDisabled ? true : isChecked}
                                    disabled={isDisabled}
                                    onChange={() => handleCheckboxChange(entry)}
                                  />
                                  {entry.label}
                                </label>
                              </li>
                            );
                          })}

                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="container">
                  <div className="get-service space-remove">
                    <button
                      className="service-btn"
                      onClick={() => setFormStep((prevStep) => prevStep - 1)}
                    >
                      Back
                    </button>
                    <button
                      className="service-btn"
                      onClick={() => setFormStep((prevStep) => prevStep + 1)}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </>
            )}
            {formStep === 2 && (
              <div className="row">
                <Elements stripe={stripePromise}>
                  <PaymentForm selectedEntries={selectedEntries} />
                </Elements>
                <div className="get-service d-flex space-remove mt-4">
                  <button
                    className="service-btn"
                    onClick={() => setFormStep((prevStep) => prevStep - 1)}
                  >
                    Back
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </section>
    </div>
  );
};

export default Registration;
