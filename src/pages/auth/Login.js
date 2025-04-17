import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { Link,useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useLoginUserMutation } from "../../features/user/api";
import { setUser } from "../../features/user/userSlice";
import { StarImages } from "../../utils/common";
import FlyZoneWhiteLogo from "../../assets/images/flyzone-white.svg";
import { getValidationSchema } from "../../utils/validationSchema";
import "react-toastify/dist/ReactToastify.css";
import "../../assets/css/login.css";

export default function Login() {
  const location = useLocation();
  const schema = getValidationSchema("login");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const from = location.state?.from?.pathname || "/";
  const [createUser] = useLoginUserMutation();
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
  
    try {
      const response = await createUser(data).unwrap();
  
      if (response.success) {
        const { user, token } = response;
        dispatch(setUser({ user, token }));
        localStorage.setItem("authToken", token);
        localStorage.setItem("user", JSON.stringify(user));
        toast.success("User is Login Successfully");
  
        setTimeout(() => {
          const redirectPath = localStorage.getItem("redirectPath") || "/";
          localStorage.removeItem("redirectPath");
  
          const isBurunuRegister = from === "/tournaments/burunu-Boma/register";
  
          if (user?.role === "admin") {
            if (isBurunuRegister) {
              navigate(from, { replace: true });
            } else {
              navigate("/admin-dashboard/registration");
            }
          } else {
            if (isBurunuRegister) {
              navigate(from, { replace: true });
            } else {
              navigate(redirectPath);
            }
          }
        }, 1000);
      } else {
        toast.error(response?.message || "Something went wrong.");
      }
    } catch (error) {
      toast.error(error?.data?.message || "Failed to login.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <>
      <ToastContainer />
      <div className="login-page d-flex justify-content-center align-items-center ">
        <div className="container d-flex gap-5 flex-column flex-lg-row ">
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
              engagement, streamline operations, and strengthen security
            </p>
          </div>
          <div className="login-right">
            <div className="login-wrapper">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="mb-4 text-center fw-bold">Sign In</h1>
                <label>Email</label>
                <input
                  type="text"
                  className={`login-input ${errors.email ? "input-error" : ""}`}
                  {...register("email")}
                />
                {errors.email && (
                  <span className="error-text">{errors.email.message}</span>
                )}
                <div className="password-container">
                  <label className="mt-3">Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    className={`login-input ${errors.password ? "input-error" : ""
                      }`}
                    {...register("password")}
                  />
                  <span
                    className="eye-icon"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                {errors.password && (
                  <span className="error-text">{errors.password.message}</span>
                )}
                <div className="mt-3 d-flex align-items-center gap-1">
                  <input
                    type="checkbox"
                    id="remember-me"
                    className="checkbox-large"
                  />
                  <label htmlFor="remember-me" className="text-muted">
                    Remember me
                  </label>
                </div>
                <hr />
                <div className="text-center form-para text-muted mt-4">
                  Don’t have an account?
                  <Link to="/signup" className="text-decoration-none fw-bold">
                    {" "}
                    Sign Up here
                  </Link>
                </div>
                <div className="text-center mt-4">
                  <button
                    className="login-btn"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <div
                          class="spinner-border text-light"
                          role="status"
                        ></div>
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </div>
              </form>
            </div>
            {/* Star Motion Animation */}
            {StarImages.map((image, index) => (
              <motion.img
                key={index}
                src={image.src}
                alt="Get Started Button Arrow"
                className={image.className}
                animate={{ x: ["0px", "10px", "0px"] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
