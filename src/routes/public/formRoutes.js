import React, { lazy } from "react";
import { Route } from "react-router-dom";

// Lazy load components
const Forum = lazy(() => import("../../pages/Forums"));
const ForumDetail = lazy(() => import("../../pages/Forums/forumDetail"));
const Category = lazy(() => import("../../pages/Forums/category"));
const SubCategoryTable = lazy(() => import("../../pages/Forums/subCategory"));

const ForumRoutes = () => (
  <>
    <Route path="/forums" element={<Forum />} />
    <Route path="/forum/detail/:id" element={<ForumDetail />} />
    <Route path="/forum/category/:id" element={<Category />} />
    <Route path="/forum/subcategory/:id" element={<SubCategoryTable />} />
  </>
);

export default ForumRoutes;
