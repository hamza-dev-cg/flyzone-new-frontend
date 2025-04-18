import React, { useState, useEffect } from "react";
import {useParams } from "react-router-dom";

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
  useMeatFishRegisterTournamentMutation
} from "../../../features/registerMeatFish/api";

// const stripePromise = loadStripe(
//   "pk_live_51QUApaLX0WQuQ4Sa64hLBwBGpGHLYu0LLdzkFs6K8aZYdnkyiNv6LCIFIjjfnauzIBqctAZKqCCyh7wjHG75QJcX00IWLxFAjH"
// );
const stripePromise = loadStripe(
  "pk_test_51QUrEfBZAGDpCST54w64nCWNe1mLcRN89XQw86WxDSIEXRfOVz1jfIVM5bklMLyMmuaUhcRcO21Vb08g6OcMeJBt00jGMnTbms"
);

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const userInfo = useSelector((state) => state.user?.user);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [formStep, setFormStep] = useState(() => {
    const savedStep = localStorage.getItem("formStep");
    return savedStep ? parseInt(savedStep, 10) : 0;
  });
  const { event_id } = useParams();
  const steps = ["User Details", "Add Optional", "Add Payment"];
  const [UpdateRegisterUser] = useUpdateRegisterUserMutation();
  const [MeatFishRegister] = useMeatFishRegisterTournamentMutation()
  const [registeredActivities, setRegisteredActivities] = useState({
    heaviestFish: {
      level_one_500_heaviesct_fish: false,
      level_two_1000_heaviest_fish: false,
      level_three_1500_heaviest_fish_winner_take_all: false,
    },
    heaviestStringer: {
      level_one_500_heaviest_stringer: false,
      level_two_1000_heaviest_stringer: false,
      level_three_1000_heaviest_stringer_winner_take_all: false,
    },
    tunaDivision: {
      level_one_500_heaviest_tuna: false,
      level_two_1000_heaviest_tuna: false,
      level_three_2500_heaviest_tuna_winner_take_all: false,
      level_four_1000_heaviest_stringer_top_5: false,
    },
    meatFishDivision: {
      level_one_500_heaviest_dolphin: false,
      level_one_500_heaviest_wahoo: false,
    },
    bigFishDaily: {
      level_one_500_heaviest_daily_fish: false,
    }
  });

  const handleCheckboxChange = (category, key) => {
    setRegisteredActivities((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: !prev[category][key],
      }
    }));
  };

  useEffect(() => {
    localStorage.setItem("formStep", formStep);
  }, [formStep]);
  useEffect(() => { }, [formStep]);


  const onSubmit = async (data) => {
    if (!data) {
      toast.error("Form submission failed. Required data is missing.");
      return;
    }
    setLoading(true);
    try {
      const res = await UpdateRegisterUser(userInfo.id, data);
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


  const calculateTotalAmount = (activities) => {
    let total = 0; 
    Object.values(activities).forEach(category => {
      Object.entries(category).forEach(([key, value]) => {
        if (value) {
          const match = key.match(/(\d+)/);  
          if (match) {
            total += parseInt(match[0]); 
          }
        }
      });
    });

    return total;
  };


  const handleNextStep = async () => {
    const jsonData = {
      eventId: event_id,
      registeredActivities: registeredActivities
    }
    try {
      const res = await MeatFishRegister(jsonData);
      const total_amount = calculateTotalAmount(registeredActivities);
      if (res?.data) {
        localStorage.setItem('total_amount', total_amount)
      }
      setFormStep((prevStep) => {
        const newStep = prevStep + 1;
        localStorage.setItem("formStep", newStep);
        return newStep;
      });
    } catch (err) {
      toast.error("An error occurred while registering. Please try again.");
    } finally {
      setLoading(false);
    }

  };


  return (
    <div>
      <ToastContainer />
      <section className="layout-space register-section">
        <div className="content-center">
          <h1 className="text-center">Registration Form</h1>
          <img className="responsive-line" src={Line} alt="line" />
        </div>

        <section className="form-section">
          <div className="form-container">
            <Stepper activeStep={formStep}>
              {steps.map((label, index) => (
                <>
                  <div
                    key={index}
                    className="d-flex flex-column align-items-center stepper-font-size"
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
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register("firstName", {
                          required: "First name is required",
                        })}
                        value={userInfo?.firstName}
                        disabled={userInfo?.firstName}
                      />
                      {errors.firstName && (
                        <span className="text-danger font-12">
                          {errors.firstName.message}
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
                        {...register("lastName", {
                          required: "Last name is required",
                        })}
                        value={userInfo?.lastName}
                        disabled={userInfo?.lastName}
                      />
                      {errors.lastName && (
                        <span className="text-danger font-12">
                          {errors.lastName.message}
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
                        {...register("boatName", {
                          required: "Boat name is required",
                        })}
                        value={userInfo?.boatName}
                        disabled={userInfo?.boatName}
                      />
                      {errors.boatName && (
                        <span className="text-danger font-12">
                          {errors.boatName.message}
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
                        {...register("zipCode", { required: "Zip is required" })}
                        value={userInfo?.zipCode}
                        disabled={userInfo?.zipCode}
                      />
                      {errors.zipCode && (
                        <span className="text-danger font-12">
                          {errors.zipCode.message}
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
                        {...register("phoneNo", {
                          required: "Phone is required",
                        })}
                        value={userInfo?.phoneNo}
                        disabled={userInfo?.phoneNo}
                      />
                      {errors.phoneNo && (
                        <span className="text-danger font-12">
                          {errors.phoneNo.message}
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
                    <div className="rule-description">
                      <p>
                        <strong>Heaviest Fish</strong>
                      </p>
                      <ul>
                        <label>
                          <input
                            type="checkbox"
                            checked={registeredActivities.heaviestFish.level_one_500_heaviesct_fish}
                            onChange={() =>
                              handleCheckboxChange("heaviestFish", "level_one_500_heaviesct_fish")
                            }
                          />
                          $500 - Level 1 - Heaviest Fish (65/25/10 Split)
                        </label>

                        <label>
                          <input
                            type="checkbox"
                            checked={registeredActivities.heaviestFish.level_two_1000_heaviest_fish}
                            onChange={() =>
                              handleCheckboxChange("heaviestFish", "level_two_1000_heaviest_fish")
                            }
                          />
                          $1000 - Level 2 - Heaviest Fish (65/25/10 Split)
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            checked={registeredActivities.heaviestFish.level_three_1500_heaviest_fish_winner_take_all}
                            onChange={() =>
                              handleCheckboxChange("heaviestFish", "level_three_1500_heaviest_fish_winner_take_all")
                            }
                          />
                          $1500 - Level 3 - Heaviest Fish Winner Take All
                        </label>
                      </ul>
                    </div>
                    <div className="rule-description">
                      <p>
                        <strong>Heaviest Stringer</strong>
                      </p>
                      <ul>
                        <label>
                          <input
                            type="checkbox"
                            checked={registeredActivities.heaviestStringer.level_one_500_heaviest_stringer}
                            onChange={() =>
                              handleCheckboxChange("heaviestStringer", "level_one_500_heaviest_stringer")
                            }
                          />
                          $500 - Level 1 - Heaviest Stringer (65/25/10 Split)
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            checked={registeredActivities.heaviestStringer.level_two_1000_heaviestFish_stringer}
                            onChange={() =>
                              handleCheckboxChange("heaviestStringer", "level_two_1000_heaviestFish_stringer")
                            }
                          />
                          $1000 - Level 2 - Heaviest Stringer (65/25/10 Split)
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            checked={registeredActivities.heaviestStringer.level_three_1000_heaviestFish_stringer_winner_take_all}
                            onChange={() =>
                              handleCheckboxChange("heaviestStringer", "level_three_1000_heaviestFish_stringer_winner_take_all")
                            }
                          />
                          $1000 - Level 3 - Heaviest Stringer Winner Take All
                        </label>
                      </ul>
                    </div>
                    <div className="rule-description">
                      <p>
                        <strong>Tuna Division</strong>
                      </p>
                      <ul>
                        <label>
                          <input
                            type="checkbox"
                            checked={registeredActivities.tunaDivision.level_one_500_heaviest_tuna}
                            onChange={() =>
                              handleCheckboxChange("tunaDivision", "level_one_500_heaviest_tuna")
                            }
                          />
                          $500 - Level 1 - Heaviest Tuna (65/25/10 Split)
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            checked={registeredActivities.tunaDivision.level_two_1000_heaviest_tuna}
                            onChange={() =>
                              handleCheckboxChange("tunaDivision", "level_two_1000_heaviest_tuna")
                            }
                          />
                          $1000 - Level 2 - Heaviest Tuna (65/25/10 Split)
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            checked={registeredActivities.tunaDivision.level_three_2500_heaviest_tuna_winner_take_all}
                            onChange={() =>
                              handleCheckboxChange("tunaDivision", "level_three_2500_heaviest_tuna_winner_take_all")
                            }
                          />
                          $2500 - Level 3 - Heaviest Tuna Winner Take All
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            checked={registeredActivities.tunaDivision.level_four_1000_heaviest_stringer_top_5}
                            onChange={() =>
                              handleCheckboxChange("tunaDivision", "level_four_1000_heaviest_stringer_top_5")
                            }
                          />
                          $1000 - Level 4 - Heaviest Stringer - Select Up to 5 Qualifying Tuna (65/25/10 Split)
                        </label>
                      </ul>
                    </div>
                    <div className="rule-description">
                      <p>
                        <strong>Meatfish Division</strong>
                      </p>
                      <ul>
                        <label>
                          <input
                            type="checkbox"
                            checked={registeredActivities.meatFishDivision.level_one_500_heaviest_dolphin}
                            onChange={() =>
                              handleCheckboxChange("meatFishDivision", "level_one_500_heaviest_dolphin")
                            }
                          />
                          $500 - Level 1 - Heaviest Dolphin (65/25/10 Split)
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            checked={registeredActivities.meatFishDivision.level_one_500_heaviest_dolphin}
                            onChange={() =>
                              handleCheckboxChange("meatFishDivision", "level_one_500_heaviest_dolphin")
                            }
                          />
                          $500 - Level 2 - Heaviest Wahoo (65/25/10 Split)
                        </label>

                      </ul>
                    </div>
                    <div className="rule-description">
                      <p>
                        <strong>Big Fish Daily</strong>
                      </p>
                      <ul>
                        <label>
                          <input
                            type="checkbox"
                            checked={registeredActivities.bigFishDaily.level_one_500_heaviest_daily_fish}
                            onChange={() =>
                              handleCheckboxChange("bigFishDaily", "level_one_500_heaviest_daily_fish")
                            }
                          />
                          $500 - Level 1 - Heaviest Daily Fish Weighed Each Day (Winner Each Day)
                        </label>


                      </ul>
                    </div>
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
                    <button className="service-btn" onClick={handleNextStep}>
                      Next
                    </button>
                  </div>
                </div>
              </>
            )}
            {formStep === 2 && (
              <div className="row">
                <Elements stripe={stripePromise}>
                  <PaymentForm />
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
