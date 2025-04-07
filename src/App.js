import React, { useState, useEffect,Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
  Navigate,
  Outlet
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import store from "./store/store";
import theme from "./styles/theme-variable";
import GlobalStyles from "./styles/global-styles";
import RegisterForm from "./pages/RegisterForm";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";
import ChatBotIcon from "./components/ChatBot/ChatBotIcon";
import Footer from "./components/Footer";
import MainNavbar from "./components/MainNavbar";
import MiniNavbar from "./components/MiniNavbar";
import AppRoutes from "./routes/app/admin/appRoutes";
import AuthRoutes from "./routes/public/publicRoutes";
import { Provider } from "react-redux";
import "./App.css";
import "./assets/css/home.css";;

function App() {
  const [top, setTop] = useState(true);
  const Loader = () => <div className="loader-container">
    <span className="loader"></span>
  </div>
  const NavbarWrapper = () => {
    const location = useLocation();
    const hideNavbar =
      location.pathname.includes("tournaments") ||
      location.pathname.includes("admin-dashboard") ||
      location.pathname === "/login" ||
      location.pathname === "/signup";


    return !hideNavbar ? (
      <div className={`${top ? "" : "add-box-shadow"} fixed-navbar`}>
        <MiniNavbar />
        <MainNavbar />
      </div>
    ) : null;
  };

  const HideFooter = () => {
    const location = useLocation();
    const hideFooter =
      location.pathname.includes("admin-dashboard") ||
      location.pathname === "/login" ||
      location.pathname === "/signup";
    return hideFooter ? null : <Footer />;
  };
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Suspense fallback={<Loader />}>
        <Router>
          <NavbarWrapper />
          <ScrollToTop />
          <ChatBotIcon />
          <Routes>
            {AuthRoutes()}
            {AppRoutes()}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <HideFooter />
        </Router>
        </Suspense>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
