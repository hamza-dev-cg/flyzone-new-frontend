import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useVerifyOtpMutation,
  useResendOtpMutation,
} from "../../features/user/api";
import { convertToFormData } from "../../utils/helpers";
import { StarImages } from "../../utils/common";
import "../../assets/css/login.css";
import "react-toastify/dist/ReactToastify.css";

export default function VerifyOtp() {
  const [otp, setOtp] = useState(["", "", "", "" , ""]);
  const inputRefs = [useRef(), useRef(), useRef(), useRef() , useRef()];
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
  const [resendOtp, { isLoading: isResending }] = useResendOtpMutation();
  const [resendDisabled, setResendDisabled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const token = location.state?.token;
  if (!token) {
    toast.error("Token is missing. Please register again.");
    navigate("/signup");
  }

  // Handle input change
  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 4) {
      inputRefs[index + 1].current.focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  // Handle form submit (OTP verification)
  const onSubmit = async (e) => {
    e.preventDefault();
    const finalOtp = Number(otp.join(""));
    if (finalOtp.toString().length !== 5) {
      toast.error("OTP must be 5 digits");
      return;
    }
    
    try {
      const response = await verifyOtp({ finalOtp, token }).unwrap();
      if (response.success) {
        toast.success(response?.message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        toast.error(response?.message);
      }
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  // Handle OTP Resend
  const handleResendOtp = async () => {
    if (resendDisabled) return;
    try {
      setResendDisabled(true);
      const formData = convertToFormData({  });
      const response = await resendOtp(formData).unwrap();

      if (response.success) {
        toast.success(response?.messages[0] || "OTP resent successfully!");
        setResendDisabled(false);
      } else {
        toast.error(response?.messages[0] || "Failed to resend OTP.");
      }
    } catch (error) {
      toast.error(error?.message || "Something went wrong.");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="login-page d-flex justify-content-center align-items-center">
        <div className="otp-right">
          <div className="login-wrapper">
            <form onSubmit={onSubmit}>
              <h1 className="mb-4 text-center fw-bold">Verify OTP</h1>

              {/* OTP Boxes */}
              <div className="otp-container">
                {otp.map((value, index) => (
                  <input
                    key={index}
                    ref={inputRefs[index]}
                    type="text"
                    maxLength="1"
                    className="otp-box"
                    value={value}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                  />
                ))}
              </div>

              {/* Resend OTP */}
              <div>
                <div className="text-center mt-4">
                  <button
                    className="login-btn"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div
                        className="spinner-border text-light"
                        role="status"
                      ></div>
                    ) : (
                      "Verify"
                    )}
                  </button>
                </div>
              </div>
              <div className="text-center form-para text-muted mt-4">
                <p>If your OTP has expired, click below to resend it.</p>
                <button
                  type="button"
                  className="btn btn-link p-0"
                  onClick={handleResendOtp}
                  disabled={resendDisabled || isResending}
                  style={{
                    textDecoration: "underline",
                    color: "#007bff",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "inherit",
                  }}
                >
                  {isResending ? "Resending..." : "Resend OTP"}
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
    </>
  );
}
