import React, { lazy } from "react";
import { Route } from "react-router-dom";

// Lazy load profile components
const Profile = lazy(() => import("../../../pages/profile"));
const ProfileEdit = lazy(() => import("../../../pages/profileEdit"));
const ProfileEventDetail = lazy(()=> import('../../../components/EventDetail/index.js'))
const WestEndMeatFishMadnessRegistration = lazy(() => import("../../../pages/Events/WestEndMeatfishMadness/Registeration.js"));

const ProfileRoutes = () => (
  <>
    <Route path="/profile/detail" element={<Profile />} />
    <Route path="/profile/update" element={<ProfileEdit />} />
    <Route path="/profile/detail/event" element={<ProfileEventDetail />} />

    <Route
      path="/west-end-meat-fish/register/:event_id"
      element={<WestEndMeatFishMadnessRegistration />}
    />
  </>
);

export default ProfileRoutes;
