import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { LuClock8 } from "react-icons/lu";

import UploadIcon from "../../../../assets/icons/upload-file-icon.svg";
import { FiPlus } from "react-icons/fi";
import Button from "../../../../components/Button/index";
import { AddEventWrapper, InputWrapper } from "./style";

const InputField = ({ label, type = "text", placeholder, children, extraProps }) => (
  <InputWrapper>
    <label>{label}</label>
    {children ? (
      <span className="d-flex gap-3 align-items-center">{children}</span>
    ) : (
      <input type={type} placeholder={placeholder} {...extraProps} />
    )}
  </InputWrapper>
);

const TimeInput = ({ label, placeholder }) => (
  <InputWrapper>
    <label>{label}</label>
    <span className="d-flex gap-3 align-items-center">
      <input placeholder={placeholder} />
      <span className="clock-icon">
        <LuClock8 />
      </span>
    </span>
  </InputWrapper>
);

const FileUpload = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log("Files uploaded:", acceptedFiles);
  }, []);

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
          Drag and Drop Files here or
          <span className="choose-file">choose file</span>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-2">
        <p className="text-gray-500 text-sm">
          Files Supported: PDF, XLSX, Images
        </p>
        <p className="text-gray-500 text-sm">Maximum size: 5MB</p>
      </div>
    </div>
  );
};

const ScheduleSection = ({ title, children,notVisible }) => (
  <div className="event-box">
    <h5>{title}</h5>
    {children}
    {notVisible ? null : 
    <div className="action-box d-flex justify-content-between">
      <div className="cursor-pointer">
        <FiPlus /> Add Information
      </div>
      <div className="text-underline">Remove Section</div>
    </div> }
  </div>
);

const DayFishingSection = ({ day }) => (
  <div className="col-lg-6 col-md-12">
    <div className="bg-white p-3 rounded">
      <h6 className="mb-2 ">{`Day ${day} Fishing`}</h6>
      <InputField label="Day" type="date" placeholder="Write Event Name Here" />
      <div className="d-flex gap-2">
        <TimeInput label="Call for 'Lines In" placeholder="6:00PM"  />
        <TimeInput label="Lines Out" placeholder="6:00PM" />
      </div>
      <TimeInput label="All boats must be back in channel marker lines" placeholder="6:00PM" />
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
  const [description, setDescription] = useState(
    "The Chub Cay Classic, presented by Fly Zone Fishing, and hosted by Chub Cay Marina and Resort, is the 4th annual tournament in a three-part fishing series from March 13 to March 15, 2025, in the Bahamas. This event brings together anglers from across the globe, promoting sport fishing, camaraderie, and conservation."
  );

  return (
    <AddEventWrapper>
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="mb-0">Add New Event</h4>
        <Button startIcon={<FiPlus />} text="Create Event" />
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="event-box">
            <h5>Basic Information</h5>
            <InputField label="Event Name" placeholder="Write Event Name Here" />
            <InputField label="Date">
              <>
                <input type="date" placeholder="Start Date" />
                <span>to</span>
                <input type="date" placeholder="End Date" />
              </>
            </InputField>
            <InputWrapper marginBottom="0">
              <label>Description</label>
              <textarea
                rows="5"
                placeholder="Write Event Name Here"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </InputWrapper>
          </div>
        </div>
        <div className="col-md-6">
          <ScheduleSection title="Upload Photo" notVisible>
            <FileUpload />
          </ScheduleSection>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <ScheduleSection title="Schedule of Events">
            <InputField label="Date" type="date" placeholder="4:00PM" />
            <TimeInput label="Registration and Bag Pick up Time" placeholder="6:00PM" />
            <TimeInput label="Captain’s Meeting" placeholder="6:00PM" />
          </ScheduleSection>
        </div>
      </div>

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

      <ScheduleSection title="Awards ceremony">
        <TimeInput label="Time"placeholder="6:00PM" />
      </ScheduleSection>

      <ScheduleSection title="Dinner">
        <TimeInput label="Time" placeholder="6:00PM" />
        <InputWrapper marginBottom="0">
          <label>Description</label>
          <textarea
            rows="5"
            placeholder="Write Event Name Here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </InputWrapper>
      </ScheduleSection>
      <div className="add-divider">
        <div className="add-divider-left"></div>
        <button className="btn add-section-button"><FiPlus /> Add Section</button>
        <div className="add-divider-right"></div>
        </div>
    </AddEventWrapper>
  );
};

export default Index;
