import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Line from "../../assets/images/line.png";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    const formData = {
      ...data,
      chub_cay_classic: data.chub_cay_classic ? 1 : 0,
      chub_cay_open: data.chub_cay_open ? 1 : 0,
      chub_cay_invitational: data.chub_cay_invitational ? 1 : 0,
    };

    try {
      const response = await axios.post(
        "https://flyzone.ai/flyzone_laravel/api/tournament/add",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Registration Successful!", { autoClose: 3000 });
        setTimeout(() => navigate("/"), 2000); // Delay navigation
      } else {
        toast.error(response?.data?.message?.[0] || "Something went wrong.", {
          autoClose: 3000,
        });
      }
    } catch (err) {
      toast.error("API Error: Unable to register.", { autoClose: 3000 });
      console.error("API Error:", err);
    } finally {
      setLoading(false); // Stop loading
    }
  };
  const EventCheckbox = ({ label, name, register }) => {
    return (
      <div className="col-md-12">
        <label className="custom-card-n">
          <div className="sub-sec">
            <span className="card-title">{label}</span>
          </div>
          <div className="c-box">
            <input type="checkbox" {...register(name)} className="hidden" />
          </div>
        </label>
      </div>
    );
  };

  return (
    <div>
      <ToastContainer />
      <section className="register-section layout-space">
        <div className="content-center">
          <h1>Registration Form</h1>
          <img className="responsive-line" src={Line} alt="line" />
        </div>
        <section className="form-section">
          <div className="form-container">
            <form className="form-c" onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                {/* Name Field */}
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">Name*</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <span className="text-danger">{errors.name.message}</span>
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">Email*</label>
                    <input
                      type="email"
                      className="form-control"
                      {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && (
                      <span className="text-danger">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Event Selection */}
                <div className="info-section col-md-12">
                  <h5 className="text-dark">Select the Event</h5>
                </div>

                {[
                  // { label: "Chub Cay Classic", name: "chub_cay_classic" },
                  { label: "Chub Cay Open", name: "chub_cay_open" },
                  {
                    label: "Chub Cay Invitational",
                    name: "chub_cay_invitational",
                  },
                ].map((event) => (
                  <EventCheckbox
                    key={event.name}
                    label={event.label}
                    name={event.name}
                    register={register}
                  />
                ))}

                {/* Note Field */}
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">Note</label>
                    <textarea
                      className="form-control"
                      placeholder="Say Something"
                      {...register("note")}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="container">
                  <div className="get-service space-remove">
                    <button
                      className="service-btn"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Loading...." : "Register Now"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Register;
