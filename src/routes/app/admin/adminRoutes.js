import React, { lazy } from "react";
import { Route } from "react-router-dom";

// Lazy load components for the admin section
// const AdminLeaderBoard = lazy(() => import("../../../pages/AdminPanel"));
const TournamentRegistration = lazy(() => import("../../../pages/AdminPanel/AllRegistration"));
const ForumsUploads = lazy(() => import("../../../pages/AdminPanel/ForumUploads"));
const Applicants = lazy(() => import("../../../pages/AdminPanel/Applicants/applicants"));
const EventsUpload = lazy(() => import("../../../pages/AdminPanel/EventUploads"));
const ChubCayDatails = lazy(() => import("../../../pages/AdminPanel/ChubCayLeaderBoard/ChubCayDetails"));
const LeaderBoard = lazy(() => import("../../../pages/AdminPanel/LeaderBoard.js"));
const Tournaments = lazy(() => import("../../../pages/AdminPanel/Tournaments/tournaments.js"));
const TournamentsDetails = lazy(() => import("../../../pages/AdminPanel/Tournaments/tournamentsDetails/tournamentsDetails.js"));
const AddEvent = lazy(() => import("../../../pages/AdminPanel/Tournaments/AddEvent"));

const AdminRoutes = () => (
  <>
    {/* <Route path="/admin-dashboard/leaderboard" element={<AdminLeaderBoard />} /> */}
    <Route path="/admin-dashboard/registration" element={<TournamentRegistration />} />
    <Route path="/admin-dashboard/leaderboard" element={<LeaderBoard />} />
    <Route path="/admin-dashboard/forum-uploads" element={<ForumsUploads />} />
    <Route path="/admin-dashboard/applicants" element={<Applicants />} />
    <Route path="/admin-dashboard/events" element={<EventsUpload />} />
    <Route path="/admin-dashboard/detail" element={<ChubCayDatails />} />
    <Route path="/admin-dashboard/tournaments" element={<Tournaments />} />
    <Route path="/admin-dashboard/tournaments/tournaments-details" element={<TournamentsDetails />} />
    <Route path="/admin-dashboard/tournaments/tournaments-details/add-event" element={<AddEvent />} />
  </>
);

export default AdminRoutes;
