import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { LuClock8 } from "react-icons/lu";
import { useCreateTournamentEventForAdminMutation } from "../../../../features/tournaments/api";
import { ToastContainer, toast } from "react-toastify";
import UploadIcon from "../../../../assets/icons/upload-file-icon.svg";
import { FiPlus } from "react-icons/fi";
import Button from "../../../../components/Button/index";
import { AddEventWrapper, InputWrapper } from "./style";

// Input Field
const InputField = ({ label, type = "text", placeholder, children, extraProps = {} }) => (
  <InputWrapper>
    <label>{label}</label>
    {children ? (
      <span className="d-flex gap-3 align-items-center">{children}</span>
    ) : (
      <input type={type} placeholder={placeholder} {...extraProps} />
    )}
  </InputWrapper>
);

// Time Input
const TimeInput = ({ label, placeholder, extraProps = {} }) => (
  <InputWrapper>
    <label>{label}</label>
    <span className="d-flex gap-3 align-items-center">
      <input placeholder={placeholder} {...extraProps} />
      <span className="clock-icon">
        <LuClock8 />
      </span>
    </span>
  </InputWrapper>
);

// File Upload
const FileUpload = ({ onFileSelect }) => {
  const onDrop = useCallback((acceptedFiles) => {
    onFileSelect(acceptedFiles[0]);
  }, [onFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],
      "image/*": [],
    },
    maxSize: 5 * 1024 * 1024,
  });

  return (
    <div className="upload-img">
      <div
        {...getRootProps()}
        className={`w-full h-40 flex flex-col items-center justify-center cursor-pointer ${
          isDragActive ? "bg-gray-100" : "bg-white"
        }`}
      >
        <input {...getInputProps()} />
        <div className="upload-box">
          <img src={UploadIcon} alt="upload-icon" />
          Drag and Drop Files here or <span className="choose-file">choose file</span>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-2">
        <p className="text-gray-500 text-sm">Files Supported: PDF, XLSX, Images</p>
        <p className="text-gray-500 text-sm">Maximum size: 5MB</p>
      </div>
    </div>
  );
};

// Schedule Wrapper
const ScheduleSection = ({ title, children, notVisible }) => (
  <div className="event-box">
    <h5>{title}</h5>
    {children}
    {!notVisible && (
      <div className="action-box d-flex justify-content-between">
        <div className="cursor-pointer">
          <FiPlus /> Add Information
        </div>
        <div className="text-underline">Remove Section</div>
      </div>
    )}
  </div>
);

// Day Fishing Block
const DayFishingSection = ({ day }) => (
  <div className="col-lg-6 col-md-12">
    <div className="bg-white p-3 rounded">
      <h6 className="mb-2">{`Day ${day} Fishing`}</h6>
      <InputField label="Day" type="date" placeholder="Pick a date" />
      <div className="d-flex gap-2">
        <TimeInput label="Call for 'Lines In'" placeholder="6:00PM" />
        <TimeInput label="Lines Out" placeholder="6:00PM" />
      </div>
      <TimeInput label="All boats must be back" placeholder="6:00PM" />
      <TimeInput label="Scale open" placeholder="5:30PM" />
      <div className="action-box d-flex justify-content-between">
        <div className="cursor-pointer">
          <FiPlus /> Add Information
        </div>
      </div>
    </div>
  </div>
);

const Index = () => {
  const [uploadFile, setUploadFile] = useState(null);
  const [createTournamentEvent] = useCreateTournamentEventForAdminMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = {
        ...data,
          "parentTournamentId": "67f7b0d96306692def75e14f"
      };
     
      const response = await createTournamentEvent(formData);
      if (response?.data) {
        toast.success("Tournament Added Successfully");
        reset();
      } else {
        toast.error("Failed to add tournament");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An error occurred while submitting the form.");
    }
  };

  return (
    <AddEventWrapper>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="mb-0">Add New Event</h4>
          <Button startIcon={<FiPlus />} type="submit" text="Create Event" />
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="event-box">
              <h5>Basic Information</h5>
              <InputField
                label="Event Name"
                placeholder="Write Event Name Here"
                extraProps={register("name", { required: "Name is required" })}
              />
              <InputField label="Date">
                <>
                  <input
                    type="date"
                    {...register("startDate", { required: "Start date is required" })}
                  />
                  <span>to</span>
                  <input
                    type="date"
                    {...register("endDate", { required: "End date is required" })}
                  />
                </>
              </InputField>
              <InputWrapper marginBottom="0">
                <label>Description</label>
                <textarea
                  rows="5"
                  placeholder="Write description here"
                  {...register("description", { required: "Description is required" })}
                />
              </InputWrapper>
            </div>
          </div>
          <div className="col-md-6">
            <ScheduleSection title="Upload Photo" notVisible>
              <FileUpload onFileSelect={setUploadFile} />
            </ScheduleSection>
          </div>
        </div>
      </form>

      {/* Schedule of Events */}
      <div className="row">
        <div className="col-md-12">
          <ScheduleSection title="Schedule of Events">
            <InputField label="Date" type="date" placeholder="4:00PM" />
            <TimeInput label="Registration and Bag Pick up Time" placeholder="6:00PM" />
            <TimeInput label="Captain’s Meeting" placeholder="6:00PM" />
          </ScheduleSection>
        </div>
      </div>

      {/* Event Days */}
      <div className="event-box">
        <div className="d-flex justify-content-between mb-3">
          <h5>Event Days</h5>
          <button className="btn add-days">
            <FiPlus /> Add Day
          </button>
        </div>
        <div className="row">
          <DayFishingSection day={1} />
          <DayFishingSection day={2} />
        </div>
      </div>

      {/* Awards and Dinner */}
      <ScheduleSection title="Awards ceremony">
        <TimeInput label="Time" placeholder="6:00PM" />
      </ScheduleSection>

      <ScheduleSection title="Dinner">
        <TimeInput label="Time" placeholder="6:00PM" />
        <InputWrapper marginBottom="0">
          <label>Description</label>
          <textarea rows="5" placeholder="Write Event Name Here" />
        </InputWrapper>
      </ScheduleSection>

      {/* Divider */}
      <div className="add-divider">
        <div className="add-divider-left"></div>
        <button className="btn add-section-button">
          <FiPlus /> Add Section
        </button>
        <div className="add-divider-right"></div>
      </div>
    </AddEventWrapper>
  );
};

export default Index;
