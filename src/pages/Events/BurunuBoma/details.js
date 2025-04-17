import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Select from "../../../components/Select/index";
import Button from "../../../components/Button/index";
import Input from "../../../components/Input/index";
import EventsNavbar from "../../../components/EventsNavbar";
import Line from "../../../assets/images/line.png";
import EventInformationBg from "../../../assets/images/event-informat-bg.png";
import { burunuBomaDetails } from "../../../utils/dummyData";
import axios from "axios";
import { toast } from "react-toastify";

const token = localStorage.getItem("authToken");

const EventDetails = () => {
  const location = useLocation();

  const [selectSpecies, setSelectSpecies] = useState(null);
  const [selectDays, setSelectDays] = useState(null);
  const [size, setSize] = useState("");
  const [speciesCountMap, setSpeciesCountMap] = useState({});
  const [isRelease, setIsRelease] = useState(false);
  const [isKept, setIsKept] = useState(false);
  const [videoFile, setVideoFile] = useState(null);
  const [catchLimitState, setCatchLimitState] = useState(0);
  const [currentSpeciesCount, setCurrentSpeciesCount] = useState(0);

  const userId = JSON.parse(localStorage.getItem("user"));

  const speciesOptions = burunuBomaDetails.species.map((x) => ({
    value: x.value,
    label: x.name,
  }));

  const dayOptions = [
    { value: 1, label: "Day 1" },
    { value: 2, label: "Day 2" },
  ];

  const selectedSpeciesData = burunuBomaDetails.species.find(
    (x) => x.value === selectSpecies?.value
  );

  const catchLimit = selectedSpeciesData?.catchLimit || 0;
  const baseScore = selectedSpeciesData?.scoreFactor || 0;
  const releasePoint = selectedSpeciesData?.releasePoint || 0;
  const scoreData = isRelease ? baseScore + releasePoint : baseScore;

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) setVideoFile(file);
  };

  const resetForm = () => {
    setSelectSpecies(null);
    setSelectDays(null);
    setSize("");
    setIsRelease(false);
    setIsKept(false);
    setVideoFile(null);
    setCatchLimitState(0);
    setCurrentSpeciesCount(0);
  };

  const handleRegisterEvent = async () => {
    const speciesValue = selectSpecies?.value;
    const currentCount = speciesCountMap[speciesValue] || 0;

    if (currentCount >= catchLimitState) {
      toast.warning("You have exceeded the catch limit for this species.");
      return;
    }

    const formData = {
      species: speciesValue,
      score: scoreData,
      day: selectDays?.value,
      size,
      isRelease,
      isKept,
      userId: userId.id,
    };

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_DEV_URL}api/registration/burunu-buma/update`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        toast.success("Successfully registered for the tournament!");
        resetForm();
        setSpeciesCountMap((prev) => ({
          ...prev,
          [speciesValue]: (prev[speciesValue] || 0) + 1,
        }));
      } else {
        toast.error(response.data.message || "Registration failed.");
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div>
      <section className="rules-section">
        <img className="rules-bg" src={EventInformationBg} alt="fish" />
        <EventsNavbar basePath="/events" links="burunuBoma" />
        <div className="container mt-5 events-para">
          <h1 className="title">Burunu Boma Event Details</h1>
          <div className="d-flex justify-content-center my-3">
            <img src={Line} alt="line" className="responsive-line" />
          </div>

          <div className="event-details-box">
            <h2 className="text-center mb-3">Enter Details</h2>

            <div className="mb-3">
              <Select
                options={speciesOptions}
                value={selectSpecies}
                onChange={(x) => {
                  setSelectSpecies(x);
                  const found = burunuBomaDetails.species.find(
                    (s) => s.value === x.value
                  );
                  setCatchLimitState(found?.catchLimit || 0);
                  setCurrentSpeciesCount(speciesCountMap[x.value] || 0);
                }}
                label="Select Species"
                maxWidth="100%"
              />
              {catchLimitState > 0 && (
                <small className="text-muted">
                  Catch Limit: {catchLimitState} | Caught: {currentSpeciesCount}
                </small>
              )}
              {currentSpeciesCount >= catchLimitState && (
                <div className="text-danger mt-1">
                  You have reached the catch limit.
                </div>
              )}
            </div>

            <div className="mb-3">
              <Select
                options={dayOptions}
                value={selectDays}
                onChange={(x) => setSelectDays(x)}
                label="Select Day"
                maxWidth="100%"
              />
            </div>

            <Input
              onChange={(e) => setSize(e.target.value)}
              value={size}
              label="Add Size in Ft"
              disabled={
                ["blue_black_marlin", "swordfish", "soil_fish"].includes(
                  selectSpecies?.value
                )
              }
            />

            <div className="mb-3">
              <label className="form-label d-block">Upload Video</label>
              <input
                type="file"
                accept="video/*"
                onChange={handleVideoChange}
                className="form-control"
              />
              {videoFile && (
                <small className="text-muted mt-1 d-block">
                  Selected: {videoFile.name}
                </small>
              )}
            </div>

            <div className="d-flex gap-5">
              <div className="form-check mt-3 detail-checkbox">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={isRelease}
                  onChange={(e) => setIsRelease(e.target.checked)}
                  disabled={
                    !["blue_black_marlin", "swordfish"].includes(
                      selectSpecies?.value
                    )
                  }
                />
                <label className="form-check-label">Is Release</label>
              </div>

              <div className="form-check mt-3 detail-checkbox">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={isKept}
                  onChange={(e) => setIsKept(e.target.checked)}
                  disabled={
                    !["blue_black_marlin", "swordfish"].includes(
                      selectSpecies?.value
                    )
                  }
                />
                <label className="form-check-label">Is Kept</label>
              </div>
            </div>

            <div className="my-4">
              <Button
                text="Add Event"
                width="100%"
                onClick={handleRegisterEvent}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetails;
