import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import Select from "../../../components/Select/index";
import Button from "../../../components/Button/index";
import { AddEventWrapper } from '../../AdminPanel/Tournaments/AddEvent/style';
import Input from "../../../components/Input/index";
import EventsNavbar from "../../../components/EventsNavbar";
import Line from "../../../assets/images/line.png";
import UploadIcon from "../../../assets/icons/upload-file-icon.svg";
import EventInformationBg from "../../../assets/images/event-informat-bg.png";
import { burunuBomaDetails } from "../../../utils/dummyData";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useDropzone } from 'react-dropzone'; 
import { useGetEventBySlugMutation } from "../../../features/user/api";

const EventDetails = () => {
  const token = localStorage.getItem("authToken");
  const user = JSON.parse(localStorage.getItem("user"));
  const [selectSpecies, setSelectSpecies] = useState(null);
  const [speciesLimitError, setSpeciesLimitError] = useState("");
  const [speciesData, setSpeciesData] = useState([]);
  const [selectDays, setSelectDays] = useState(null);
  const [size, setSize] = useState("");
  const [isRelease, setIsRelease] = useState(false);
  const [isKept, setIsKept] = useState(false);
  const [uploadedVideoUrl, setUploadedVideoUrl] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [loadingVideoFile, setLoadingVideoFile] = useState(false);

  const speciesOptions = burunuBomaDetails.species.map((x) => ({
    value: x.value,
    label: x.name,
  }));

  const dayOptions = [
    { value: 1, label: "Day 1" },
    { value: 2, label: "Day 2" },
  ];

  const location = useLocation();
  const parts = location.pathname.split("/");
  const slug = parts[2];
  const [EventDetail] = useGetEventBySlugMutation();
  const [event, setEvent] = useState(null)
  const fetchEvents = async () => {
    try {
      const response = await EventDetail(slug);
      if (response?.data?.success) {
        setEvent(response?.data?.tournament);
      }
    } catch (err) {
      console.log("Something went wrong while fetching tournaments.");
    }
  };

  useEffect(() => {
    fetchEvents()
  }, [slug])

  useEffect(() => {
    const fetchScoreData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_DEV_URL}api/registration/burunu-buma/score/${event?.id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        if (response.data.success) {
          setSpeciesData(response.data.scorring);
        } else {
          toast.warning(response.data.message || "Failed to fetch score.");
        }
      } catch (error) {
        console.error("Error fetching score:", error);
      }
    };

    fetchScoreData();
  }, [token]);

  const selectedSpeciesData = burunuBomaDetails.species.find(
    (x) => x.value === selectSpecies?.value
  );

  const catchLimit = selectedSpeciesData?.catchLimit || 0;
  const alreadySubmitted = speciesData.filter(
    (x) => x.species === selectSpecies?.value
  ).length;

  const baseScore = selectedSpeciesData?.scoreFactor || 0;
  const releasePoint = selectedSpeciesData?.releasePoint || 0;
  const scoreData = isRelease ? baseScore + releasePoint : baseScore;

  const handleVideoChange = async (file) => {
    setLoadingVideoFile(true);
    setVideoFile(file?.name);
    let uploadedVideoUrl = null;
    const videoFormData = new FormData();
    videoFormData.append("file", file);
    try {
      const uploadRes = await axios.post(
        `${process.env.REACT_APP_DEV_URL}api/upload/video`,
        videoFormData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (uploadRes) {
        setUploadedVideoUrl(uploadRes.data.url);
        setLoadingVideoFile(false);
      } else {
        toast.error("Video upload failed.");
      }
    } catch (err) {
      console.error("Video upload error:", err);
    }
  };
  const Loader = () => <span className="loader"></span>

  const FileUpload = () => {
    const onDrop = useCallback((acceptedFiles) => {
      handleVideoChange(acceptedFiles[0]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      accept: "video/*",  // Only accept video files
      maxSize: 5 * 1024 * 1024, // Max size 5MB
    });

    return (
      <div className="upload-img">
        <div
          {...getRootProps()}
          className={`w-full h-40 flex flex-col items-center justify-center cursor-pointer ${isDragActive ? "bg-gray-100" : "bg-white"
            }`}
        >
          <input {...getInputProps()} />
          <div className="upload-box mt-4">
            {loadingVideoFile ? <Loader /> :
              <>
                <img src={UploadIcon} alt="upload-icon" />
                Drag and Drop Files here or{" "}
                <span className="choose-file">choose file</span>
              </>
            }
          </div>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <p className="text-gray-500 text-sm">Maximum size: 5MB</p>
        </div>
        {videoFile && !loadingVideoFile && (
          <small className="text-muted mt-1 d-block">
            Selected: {videoFile}
          </small>
        )}
      </div>
    );
  };

  console.log(loadingVideoFile, "setLoadingVideoFile")
  const resetForm = () => {
    setSelectSpecies(null);
    setSelectDays(null);
    setSize("");
    setIsRelease(false);
    setIsKept(false);
    setVideoFile(null);
    setSpeciesLimitError("");
    setUploadedVideoUrl('');
  };

  const handleSpeciesChange = (selected) => {
    setSelectSpecies(selected);
    const selectedData = burunuBomaDetails.species.find(
      (s) => s.value === selected?.value
    );
    const limit = selectedData?.catchLimit || 0;
    const count = speciesData.filter((s) => s.species === selected?.value).length;

    if (limit <= count) {
      setSpeciesLimitError(
        `Catch limit reached for ${selected.label}. You cannot submit more entries for this species.`
      );
    } else {
      setSpeciesLimitError("");
    }
  };

  const handleRegisterEvent = async () => {
    if (!selectSpecies || !selectDays) {
      return toast.warning("Please fill all required fields.");
    }

    if (catchLimit <= alreadySubmitted) {
      return toast.warning(
        `Catch limit reached for ${selectSpecies.label}. You cannot submit more entries.`
      );
    }

    const formData = {
      species: selectSpecies.value,
      score: scoreData,
      day: selectDays.value,
      size,
      isRelease,
      isKept,
      userId: user?.id,
      video: uploadedVideoUrl,
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
        const updatedScores = await axios.get(
          "http://172.229.220.21:8000/api/registration/burunu-buma/score/67fe5b2b91e6e50d2c28cea7",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        if (updatedScores?.data?.success) {
          setSpeciesData(updatedScores?.data?.scorring);
        }
      }
    } catch (err) {
      console.error("Submit error:", err);
    }
  };

  return (
    <div>
      <ToastContainer />
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
                onChange={handleSpeciesChange}
                label="Select Species"
                maxWidth="100%"
              />
              {speciesLimitError && (
                <div className="text-danger mt-1" style={{ fontSize: "0.9rem" }}>
                  {speciesLimitError}
                </div>
              )}
            </div>

            <div className="mb-3">
              <Select
                options={dayOptions}
                value={selectDays}
                onChange={setSelectDays}
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
              <AddEventWrapper>
                <FileUpload />
              </AddEventWrapper>
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
                disabled={loadingVideoFile}
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
