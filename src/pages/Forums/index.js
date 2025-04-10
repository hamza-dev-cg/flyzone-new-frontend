import React from "react";
import { motion } from "framer-motion";
import ForumImage from "../../assets/forumImage.jpg";
import FlyZoneLogo from "../../assets/images/Fly-Zone-Logo.png";
import ForumTable from "../../components/ForumTable";
import "../../assets/css/forumTable.css";

export default function Forum() {
  return (
    <>
      <div className="container layout-space overflow-hidden">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6  mt-4">
            <div className="info-des-container">
              <h1 className=""> Join the Conversation and Have your Say!</h1>
              <p>
                Got something on your mind? Connect with a community of curious
                minds, share your unique viewpoints or start a new topic by
                creating your thread and keep the buzz alive with all other
                sparking angulars.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 d-flex  flex-column gap-4 justify-content-center">
            <div className="d-flex justify-content-center">
              <img src={FlyZoneLogo} alt="flyzonelogo" width="300" />
            </div>
            <motion.div
              className="d-flex justify-content-center "
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 50 }}
            >
              <img src={ForumImage} alt="fish" width="300" />
            </motion.div>
          </div>
        </div>
      </div>
      <ForumTable />
    </>
  );
}
