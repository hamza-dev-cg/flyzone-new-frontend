import React, { useEffect, useState } from "react";

import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import { BiPlus, BiListPlus, BiSolidTrash } from "react-icons/bi";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  useDeleteEventMutation,
  useGetEventMutation,
  useCreateEventMutation,
  useCreateEventsTypesMutation,
} from "../../../features/EventUploads/api.js";

import {
  getTokenFromLocalStorage,
  IsAdminLoggedIn,
} from "../../../utils/helpers";
import { getValidationSchema } from "../../../utils/validationSchema";
import { checkIsUserLoggedIn } from "../../../utils/common";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal";
import Line from "../../../assets/images/small-line.svg";
import FormWrapper from "./style";

const Index = () => {
  const [addCategory, setAddCategory] = useState(false);
  const [addTopic, setAddTopic] = useState(false);
  const [forumType, setForumType] = useState([]);
  const [newForumType, setNewForumType] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const [CreateEventsTypes, { isLoading: isTypesCreating }] =
    useCreateEventsTypesMutation();
  const [CreateEvent, { isLoading: isSubCreating }] = useCreateEventMutation();
  const [DeleteEvent] = useDeleteEventMutation();
  const [GetEvent, { isLoading: isFetching }] = useGetEventMutation();

  const validationSchema = getValidationSchema("category");

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const GetCategoryData = async () => {
    try {
      const response = await GetEvent();
      setForumType(response?.data?.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    pageInitialization();
  }, []);

  const pageInitialization = async () => {
    GetCategoryData();
  };

  const onSubmit = async (data) => {
    try {
      const formatData = new FormData();
      formatData.append("event_id", data.event.value);
      formatData.append("title", data.title);
      formatData.append("description", data.description);
      formatData.append("start_time", data.startDate);
      formatData.append("end_time", data.endDate);

      if (data.image) {
        formatData.append("image", data.image);
      }
      const response = await CreateEvent(formatData).unwrap();
      if (response.success) {
        toast.success(response?.message);
        setImagePreview(null);
        reset({
          title: "",
          description: "",
          event: null,
          startDate: "",
          endDate: "",
          image: null,
        });
      } else {
        toast.error(response?.messages);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const AddEventType = async () => {
    if (newForumType.trim() !== "") {
      try {
        const response = await CreateEventsTypes({
          name: newForumType,
        }).unwrap();
        if (response?.success) {
          toast.success(response?.message);
          setForumType([...forumType, { name: newForumType }]);
          setAddTopic("");
          setNewForumType("");
        } else {
          toast.error(response?.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const removeEvent = async (index) => {
    try {
      const response = await DeleteEvent(index).unwrap();
      if (response.success) {
        GetCategoryData();
        toast.success(response?.message);
      } else {
        toast.error(response?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="header-row">
        <h1>Events Upload</h1>
      </div>
      <div className="my-4 d-flex justify-content-end gap-4">
        <Button
          startIcon={<BiPlus />}
          onClick={() => setAddTopic(true)}
          text="Add Event Type"
        />
      </div>
      <FormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-6 ">
                  <label className="mb-2">Event Type</label>
                  <Controller
                    name="event"
                    control={control}
                    render={({ field }) => (
                      <>
                        <Select
                          {...field}
                          options={forumType.map((item) => ({
                            value: item.id,
                            label: item.name,
                          }))}
                          isSearchable
                          placeholder="Select Event Type..."
                          onChange={(selectedOption) =>
                            field.onChange(selectedOption)
                          }
                        />
                        {errors.event && (
                          <span className="text-danger">
                            {errors.event.message}
                          </span>
                        )}
                      </>
                    )}
                  />
                </div>
                <div className="col-lg-6 mt-4 mt-lg-0">
                  <Controller
                    name="title"
                    control={control}
                    render={({ field }) => (
                      <>
                        <Input
                          {...field}
                          label="Title"
                          placeholder="Add Title here"
                        />
                        {errors.title && (
                          <span className="text-danger">
                            {errors.title.message}
                          </span>
                        )}
                      </>
                    )}
                  />
                </div>
                <div className="col-lg-6">
                  <Controller
                    name="startDate"
                    control={control}
                    render={({ field }) => (
                      <>
                        <label className="mb-2">Select Start Date</label>
                        <input
                          type="date"
                          {...field}
                          className="form-control"
                        />
                        {errors.startDate && (
                          <span className="text-danger">
                            {errors.startDate.message}
                          </span>
                        )}
                      </>
                    )}
                  />
                </div>

                <div className="col-lg-6 mt-4 mt-lg-0">
                  <Controller
                    name="endDate"
                    control={control}
                    render={({ field }) => (
                      <>
                        <label className="mb-2">Select End Date</label>
                        <input
                          type="date"
                          {...field}
                          className="form-control"
                        />
                        {errors.endDate && (
                          <span className="text-danger">
                            {errors.endDate.message}
                          </span>
                        )}
                      </>
                    )}
                  />
                </div>
                <div className="col-lg-12 mt-4">
                  <Controller
                    name="description"
                    control={control}
                    render={({ field }) => (
                      <>
                        <Input
                          {...field}
                          label="Description"
                          as="textarea"
                          className="textarea-height"
                          placeholder="Add Description here"
                        />
                        {errors.description && (
                          <span className="text-danger">
                            {errors.description.message}
                          </span>
                        )}
                      </>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-center">
              <label className="mb-2">Upload Image</label>
              <Controller
                name="image"
                control={control}
                render={({ field }) => (
                  <>
                    <div
                      className={`upload-box ${
                        dragActive ? "drag-active" : ""
                      }`}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                    >
                      <input
                        type="file"
                        accept="image/*"
                        className="file-input"
                        onChange={(e) => {
                          field.onChange(e.target.files[0]);
                          handleImageChange(e);
                        }}
                      />
                      {!imagePreview ? (
                        <p className="upload-text">
                          Drag & Drop or Click to Upload
                        </p>
                      ) : (
                        <img
                          src={imagePreview}
                          alt="Uploaded Preview"
                          className="img-preview"
                        />
                      )}
                    </div>
                    {errors.image && (
                      <span className="text-danger">
                        {errors.image.message}
                      </span>
                    )}
                  </>
                )}
              />
            </div>
            <div className="col-lg-12">
              <div className="my-4 d-flex justify-content-end">
                <Button
                  width="200px"
                  type="submit"
                  text={isSubCreating ? "Submitting..." : "Submit"}
                />
              </div>
            </div>
          </div>
        </form>
      </FormWrapper>
        <Modal show={addTopic} handleClose={() => setAddTopic(false)}>
          <div className="text-center">
            <h1>Add Event Type</h1>
            <img src={Line} alt="no-icon" />
          </div>
          <div className="modal-inner-content">
            <div className="d-flex gap-2 align-items-center">
              <Input
                label="Event Type Name"
                type="text"
                value={newForumType}
                onChange={(e) => setNewForumType(e.target.value)}
                placeholder="Name"
                marginBottom="0px"
                className="w-100"
              />
              <Button
                height="42px"
                width="43px"
                className="icon-button add-top-space"
                startIcon={<BiListPlus />}
                onClick={AddEventType}
              />
            </div>

            {isFetching ? (
              <div className="d-flex justify-content-center align-items-center mt-4">
                <div className="spinner-border text-primary" role="status"></div>
              </div>
            ) : forumType.length > 0 ? (
              <div className="mt-4">
                <span className="font-bold">Events Types</span>
                <ul className="add-list">
                  {forumType.map((item, index) => (
                    <li
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      {item.name}
                      <button
                        onClick={() => removeEvent(item.id)}
                        className="btn trash-button"
                      >
                        <BiSolidTrash />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="text-center mt-4 text-muted">No Events added</div>
            )}
          </div>
          <div className="text-center">
            <Button
              width="180px"
              text="Close"
              onClick={() => setAddTopic(false)}
            />
          </div>
        </Modal>
    </>
  );
};

export default Index;
