import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRegisterUserMutation } from "../../features/user/api";
import FlyZoneWhiteLogo from "../../assets/images/flyzone-white.svg";
import { getValidationSchema } from "../../utils/validationSchema";
import "react-toastify/dist/ReactToastify.css";
import "../../assets/css/login.css";

export default function SignUp() {
  const schema = getValidationSchema("register");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [createUser] = useRegisterUserMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await createUser(data).unwrap();
      if (response.success) {
        toast.success(response?.message);
        setTimeout(() => {
          navigate("/verify/otp", { state: { token: response?.token } });
        }, 1000);
      } else {
        toast.error(response?.message);
      }
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    }
    setLoading(false);
  };

  return (
    <>
      <ToastContainer />
      <div className="login-page d-flex justify-content-center align-items-center">
        <div className="container d-flex gap-5 flex-column flex-lg-row align-items-center">
          <div className="login-left">
            <Link to="/">
              <img
                src={FlyZoneWhiteLogo}
                alt="fly zone logo"
                className="flyzone-login-img"
              />
            </Link>

            <h1 className="mt-3">
              Setting New Standards in Sports and Entertainment with AI-Driven
              Experiences
            </h1>
            <p className="mt-3 form-para">
              Flyzone specializes in delivering IT solutions tailored to the
              unique needs of the sports and entertainment industry. Our
              AI-driven solutions enable businesses to improve audience
              engagement, streamline operations, and strengthen security.
            </p>
          </div>
          <div className="login-right">
            <div className="login-wrapper">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="mb-4 text-center fw-bold">Sign Up</h1>

                <div className="row">
                  {/* Full Name */}
                  <div className="col-md-6">
                    <label>
                      First Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className={`login-input ${
                        errors.name ? "input-error" : ""
                      }`}
                      {...register("firstName")}
                    />
                    {errors.firstName && (
                      <span className="error-text">{errors.firstName.message}</span>
                    )}
                  </div>

                  {/* Last Name */}
                  <div className="col-md-6">
                    <label>
                      Last Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className={`login-input ${
                        errors.lastName ? "input-error" : ""
                      }`}
                      {...register("lastName")}
                    />
                    {errors.lastName && (
                      <span className="error-text">
                        {errors.lastName.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="row mt-3">
                  {/* Email */}
                  <div className="col-md-12">
                    <label>
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className={`login-input ${
                        errors.email ? "input-error" : ""
                      }`}
                      {...register("email")}
                    />
                    {errors.email && (
                      <span className="error-text">{errors.email.message}</span>
                    )}
                  </div>
                </div>
                <div className="row mt-3">
                  {/* Password */}
                  <div className="col-md-6">
                    <div className="password-container">
                      <label>
                        Password <span className="text-danger">*</span>
                      </label>
                      <input
                        type={showPassword ? "text" : "password"}
                        className={`login-input ${
                          errors.password ? "input-error" : ""
                        }`}
                        {...register("password")}
                      />
                      <span
                        className="eye-icon"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ top: "66%" }}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                    {errors.password && (
                      <span className="error-text">
                        {errors.password.message}
                      </span>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div className="col-md-6">
                    <div className="password-container">
                      <label>Confirm Password</label>
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        className={`login-input ${
                          errors.password_confirmation ? "input-error" : ""
                        }`}
                        {...register("password_confirmation")}
                      />
                      <span
                        className="eye-icon"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        style={{ top: "66%" }}
                      >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                    {errors.password_confirmation && (
                      <span className="error-text">
                        {errors.password_confirmation.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="row mt-3">
                  {/* Boat Name */}
                  <div className="col-md-6">
                    <label>Boat Name</label>
                    <input
                      type="text"
                      className={`login-input ${
                        errors.boatName ? "input-error" : ""
                      }`}
                      {...register("boatName")}
                    />
                    {errors.boatName && (
                      <span className="error-text">
                        {errors.boatName.message}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="col-md-6">
                    <label>
                      Phone <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className={`login-input ${
                        errors.phoneNo ? "input-error" : ""
                      }`}
                      {...register("phoneNo")}
                    />
                    {errors.phoneNo && (
                      <span className="error-text">{errors.phoneNo.message}</span>
                    )}
                  </div>
                </div>
                <div className="row mt-3">
                  {/* Address */}
                  <div className="col-md-12">
                    <label>Address</label>
                    <input
                      type="text"
                      className={`login-input ${
                        errors.address ? "input-error" : ""
                      }`}
                      {...register("address")}
                    />
                    {errors.address && (
                      <span className="error-text">
                        {errors.address.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label>City</label>
                    <input
                      type="text"
                      className={`login-input ${
                        errors.city ? "input-error" : ""
                      }`}
                      {...register("city")}
                    />
                    {errors.city && (
                      <span className="error-text">{errors.city.message}</span>
                    )}
                  </div>
                </div>

                <div className="row mt-3">
                  {/* City */}

                  {/* State */}
                  <div className="col-md-6">
                    <label>State</label>
                    <input
                      type="text"
                      className={`login-input ${
                        errors.state ? "input-error" : ""
                      }`}
                      {...register("state")}
                    />
                    {errors.state && (
                      <span className="error-text">{errors.state.message}</span>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label>Zip Code</label>
                    <input
                      type="text"
                      className={`login-input ${
                        errors.zipCode ? "input-error" : ""
                      }`}
                      {...register("zipCode")}
                    />
                    {errors.zipCode && (
                      <span className="error-text">{errors.zipCode.message}</span>
                    )}
                  </div>
                </div>

                {/* Already have an account? */}
                <div className="text-center form-para text-muted mt-4">
                  Already have an account?
                  <Link to="/login" className="text-decoration-none fw-bold">
                    {" "}
                    Log In here
                  </Link>
                </div>

                {/* Submit Button */}
                <div className="text-center mt-4">
                  <button
                    className="login-btn"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <div
                        className="spinner-border text-light"
                        role="status"
                      ></div>
                    ) : (
                      "Sign Up"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
