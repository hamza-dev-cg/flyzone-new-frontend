import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { BiPlus, BiListPlus} from "react-icons/bi";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useDeleteTypesMutation,
  useGetCategoryMutation,
  useCreateSubCategoryMutation,
  useCreateTypesMutation,
  useGetTypesMutation,
} from "../../../features/forum/api";
import {
  getTokenFromLocalStorage,
  IsAdminLoggedIn,
} from "../../../utils/helpers";
import { getValidationSchema } from "../../../utils/validationSchema";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Select from "react-select";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal";
import Line from "../../../assets/images/small-line.svg";
import FormWrapper from "./style";

const Index = () => {
  const [addCategory, setAddCategory] = useState(false);
  const [addTopic, setAddTopic] = useState(false);
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [forumType, setForumType] = useState([]);
  const [selectedForumTypes, setSelectedForumTypes] = useState("");
  const [newForumType, setNewForumType] = useState("");
  const [CreateTypes, { isLoading: isTypesCreating }] =
    useCreateTypesMutation();
  const [CreateCategory, { isLoading: isCreating }] =
    useCreateCategoryMutation();
  const [CreateSubCategory, { isLoading: isSubCreating }] =
    useCreateSubCategoryMutation();
  const [DeleteCategory] = useDeleteCategoryMutation();
  const [DeleteTypes] = useDeleteTypesMutation();
  const [GetCategory, { isLoading: isFetching }] = useGetCategoryMutation();
  const [GetTypes, { isLoading: isTypesFetch }] = useGetTypesMutation();

  const validationSchema = getValidationSchema("category");
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  // Get Category
  const GetCategoryData = async () => {
    try {
      const response = await GetCategory();
      setItems(response?.data?.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  const GetTypeData = async () => {
    try {
      const response = await GetTypes();
      setForumType(response?.data?.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    pageInitialization();
  }, []);

  // For Logout
  const pageInitialization = async () => {
    GetCategoryData();
    GetTypeData();
    await checkIsUserLoggedIn();
  };

  const checkIsUserLoggedIn = async () => {
    const tokenValidation = await getTokenFromLocalStorage();
    if (!tokenValidation.token) {
      localStorage.clear();
      navigate("/login");
    }

    const isAdmin = await IsAdminLoggedIn();
    if (!isAdmin) {
      navigate("/");
    }
  };

  // Add Sub Category
  const onSubmit = async (data) => {
    try {
      const formatData = {
        name: data.title,
        description: data.description,
        forum_category_id: data.event?.value,
      };
      const response = await CreateSubCategory(formatData).unwrap();
      if (response.success) {
        toast.success(response?.message);
        reset({
          title: "",
          description: "",
          event: null,
        });
      } else {
        toast.error(response?.messages);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const addItem = async () => {
    if (newItem.trim() !== "" && selectedForumTypes) {
      try {
        console.log("Adding category", selectedForumTypes);

        const payload = {
          name: newItem,
          forum_type_id: selectedForumTypes.value,
        };

        const response = await CreateCategory(payload).unwrap();

        if (response?.success) {
          toast.success(response?.message);

          setItems([
            ...items,
            {
              id: response?.data?.id,
              name: response?.data?.name,
              forum_type: selectedForumTypes.label,
            },
          ]);

          GetCategoryData();
          setNewItem("");
        } else {
          toast.error(response?.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Failed to add category.");
      }
    } else {
      toast.error("Please enter a category name and select a topic.");
    }
  };

  // Remove Category
  const removeItem = async (index) => {
    try {
      const response = await DeleteCategory(index).unwrap();
      if (response.success) {
        toast.success(response?.message);
        GetCategoryData();
      } else {
        toast.error(response?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Add Topics
  const handleTopic = async () => {
    if (newForumType.trim() !== "") {
      try {
        const response = await CreateTypes({ name: newForumType }).unwrap();
        if (response?.success) {
          toast.success(response?.message);
          setForumType([...forumType, { name: newForumType }]);
          GetTypeData();
          setAddTopic("");
        } else {
          toast.error(response?.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  // Remove Category
  const removeTypes = async (index) => {
    try {
      const response = await DeleteTypes(index).unwrap();
      if (response.success) {
        toast.success(response?.message);
        GetTypeData();
      } else {
        toast.error(response?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="header-row">
        <h1>Forums Upload</h1>
      </div>
      <div className="my-4 d-flex justify-content-end gap-4">
        <Button
          startIcon={<BiPlus />}
          onClick={() => setAddTopic(true)}
          text="Add Forum Type"
        />
        <Button
          startIcon={<BiPlus />}
          onClick={() => setAddCategory(true)}
          text="Add Category"
        />
      </div>
      <FormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            {/* Title Field */}
            <div className="col-lg-8">
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

            {/* Event Select Field */}
            <div className="col-lg-4">
              <label className="mb-2">Select Event</label>
              <Controller
                name="event"
                control={control}
                render={({ field }) => (
                  <>
                    <Select
                      {...field}
                      options={items.map((item) => ({
                        value: item.id,
                        label: item.name,
                      }))}
                      isSearchable
                      placeholder="Select category..."
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

            {/* Description Field */}
            <div className="col-lg-12 mt-lg-0 mt-4">
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

            {/* Submit Button */}
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
      <Modal show={addCategory} handleClose={() => setAddCategory(false)}>
        <div className="text-center">
          <h1>Add Category</h1>
          <img src={Line} alt="no-icon" />
        </div>
        <div className="modal-inner-content">
          <div className="d-flex gap-2 align-items-center">
            <Input
              label="Category Name"
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Name"
              marginBottom="0px"
              className="w-100"
            />
            <div className="col-lg-5">
              <label className="mb-2">Select Forum Types</label>
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
                      placeholder="Select Topic..."
                      onChange={(selectedOption) => {
                        field.onChange(selectedOption);
                        setSelectedForumTypes(selectedOption);
                      }}
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
            <Button
              height="42px"
              width="43px"
              className="icon-button add-top-space"
              startIcon={
                isCreating ? (
                  <div
                    className="spinner-border text-primary"
                    role="status"
                  ></div>
                ) : (
                  <BiListPlus />
                )
              }
              onClick={addItem}
              disabled={isCreating}
            />
          </div>
          {isFetching ? (
            <div className="d-flex justify-content-center align-items-center mt-4">
              <div className="spinner-border text-primary" role="status"></div>
            </div>
          ) : items.length > 0 ? (
            <div className="mt-4">
              <span className="font-bold">Categories</span>
              <ul className="add-list">
                {items.map((item, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {item.name}
                    {/* <button
                      onClick={() => removeItem(item.id)}
                      className="btn trash-button"
                      disabled
                    >
                      <BiSolidTrash />
                    </button> */}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="text-center mt-4 text-muted">No category added</div>
          )}
        </div>
        <div className="text-center">
          <Button
            width="180px"
            text="Close"
            onClick={() => setAddCategory(false)}
          />
        </div>
      </Modal>
      <Modal show={addTopic} handleClose={() => setAddTopic(false)}>
        <div className="text-center">
          <h1>Add Forum Type</h1>
          <img src={Line} alt="no-icon" />
        </div>
        <div className="modal-inner-content">
          <div className="d-flex gap-2 align-items-center">
            <Input
              label="Forum Type Name"
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
              startIcon={
                isCreating ? (
                  <div
                    className="spinner-border text-primary"
                    role="status"
                  ></div>
                ) : (
                  <BiListPlus />
                )
              }
              onClick={handleTopic}
            />
          </div>

          {isTypesFetch ? (
            <div className="d-flex justify-content-center align-items-center mt-4">
              <div className="spinner-border text-primary" role="status"></div>
            </div>
          ) : forumType.length > 0 ? (
            <div className="mt-4">
              <span className="font-bold">Forum Types</span>
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
                    {/* <button
                      onClick={() => removeTypes(item.id)}
                      className="btn trash-button"
                      disabled
                    >
                      <BiSolidTrash />
                    </button> */}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="text-center mt-4 text-muted">No Topics added</div>
          )}
        </div>
        <div className="text-center">
          <Button
            width="180px"
            text="Close"
            onClick={() => setAddCategory(false)}
          />
        </div>
      </Modal>

      <ToastContainer />
    </>
  );
};

export default Index;
