import React from "react";
import { Route } from "react-router-dom";
import AuthRoutes from "./authRoutes";
import ForumRoutes from "./formRoutes";
import TournamentRoutes from "./tournamentRoutes";
import {
  Home,
  OurSolution,
  Events,
  AboutUs,
  ContactUs,
  LeaderBoard,
} from "../../pages";

const PublicRoutes = () => (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/our-solutions" element={<OurSolution />} />
    <Route path="/events" element={<Events />} />
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path="/leaderboard" element={<LeaderBoard />} />
    {AuthRoutes()}
    {ForumRoutes()}
    {TournamentRoutes()}
  </>
);

export default PublicRoutes;
