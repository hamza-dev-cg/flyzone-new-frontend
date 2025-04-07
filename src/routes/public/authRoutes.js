import React, { lazy } from "react";
import { Route } from "react-router-dom";

// Lazy load components
const RegisterRecord = lazy(() =>
  import("../../pages/TournamentRegistrationsRecords")
);
const RegisterForm = lazy(() => import("../../pages/RegisterForm"));
const Login = lazy(() => import("../../pages/auth/Login"));
const SignUp = lazy(() => import("../../pages/auth/SignUp"));
const VerifyOtp = lazy(() => import("../../pages/auth/VerifyOtp"));
const PublicProfile = lazy(()=> import('../../pages/PublicProfile/index'))

const AuthRoutes = () => (
  <>
    <Route path="/registrations" element={<RegisterRecord />} />
    <Route path="/register" element={<RegisterForm />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/verify/otp" element={<VerifyOtp />} />
    <Route path="/public/profile" element={<PublicProfile />} />
  </>
);

export default AuthRoutes;
