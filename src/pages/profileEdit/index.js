import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Line from "../../assets/images/line.png";
import { useSelector, useDispatch } from "react-redux";
import { CiCamera } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import { setUser } from "../../features/user/userSlice";
import { useUpdateRegisterUserMutation } from "../../features/registerMeatFish/api";
import "../../assets/css/profile.css";
import Avatar from "react-avatar";

export default function ProfileEdit() {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user?.user);
  const [UpdateRegisterUser] = useUpdateRegisterUserMutation();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (userData) {
      reset({
        name: userData?.name || "",
        last_name: userData?.last_name || "",
        email: userData?.email || "",
        address: userData?.address || "",
        city: userData?.city || "",
        state: userData?.state || "",
        zip: userData?.zip || "",
        phone: userData?.phone || "",
        boat_name: userData?.boat_name || "",
      });
      setPreview(userData?.profile_image || "");
    }
  }, [userData, reset]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const formData = new FormData();

      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      if (imageFile) {
        formData.append("profile_image", imageFile);
      }

      const response = await UpdateRegisterUser(formData);

      if (response?.data?.success) {
        console.log(response?.data)
        localStorage.setItem("user", JSON.stringify(response.data.data));
        dispatch(setUser({ user: response.data.data }));
        setPreview(userData.profile_image);
        toast.success("Profile updated successfully!");
      } else {
        toast.error("Failed to update profile.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("An error occurred while updating profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container layout-space">
      <section className="register-section">
        <h1 className="text-center leaderboard-h1">
          Profile <span>Update</span>
        </h1>
        <div className="text-center">
          <img className="responsive-line" src={Line} alt="line" />
        </div>
        <section className="form-section">
          <div className="form-container bg-white">
            <form className="form-c mt-5" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
              <div className="d-flex justify-content-center w-full flex-column align-items-center">
                {preview ? (
                  <img
                    src={preview}
                    alt="Profile Preview"
                    className="rounded-circle rounded-image-edit"
                    width="150px"
                    height="150px"
                  />
                ) : (
                  <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center">
                    <Avatar size="120" name={userData?.name} src={userData?.profile_image} round={true} />

                  </div>
                )}

                <label className="btn btn-sm btn-outline-primary mt-2">
                  <span className="upload-icon">
                    <CiCamera />
                  </span>
                  <span>Update Profile Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImageChange}
                  />
                </label>
              </div>

              <div className="row mt-4">
                {/* First Name */}
                <div className="col-md-6 col-sm-12">
                  <div className="mb-3">
                    <label className="form-label">First Name*</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("name", {
                        required: "First name is required",
                      })}
                    />
                    {errors.name && (
                      <span className="text-danger font-12">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Last Name */}
                <div className="col-md-6 col-sm-12">
                  <div className="mb-3">
                    <label className="form-label">Last Name*</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("last_name", {
                        required: "Last name is required",
                      })}
                    />
                    {errors.last_name && (
                      <span className="text-danger font-12">
                        {errors.last_name.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">Email*</label>
                    <input
                      type="email"
                      className="form-control"
                      {...register("email", { required: "Email is required" })}
                      disabled
                    />
                    {errors.email && (
                      <span className="text-danger font-12">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Address */}
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("address")}
                    />
                  </div>
                </div>

                {/* City */}
                <div className="col-md-6 col-sm-12">
                  <div className="mb-3">
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("city")}
                    />
                  </div>
                </div>

                {/* State */}
                <div className="col-md-6 col-sm-12">
                  <div className="mb-3">
                    <label className="form-label">State</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("state")}
                    />
                  </div>
                </div>

                {/* Zip Code */}
                <div className="col-md-6 col-sm-12">
                  <div className="mb-3">
                    <label className="form-label">Zip</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("zip")}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="col-md-6 col-sm-12">
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="number"
                      className="form-control"
                      {...register("phone")}
                    />
                  </div>
                </div>

                {/* Boat Name */}
                <div className="col-md-6 col-sm-12">
                  <div className="mb-3">
                    <label className="form-label">Boat Name</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("boat_name")}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="container">
                  <div className="get-service space-remove">
                    <button
                      className="service-btn"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Loading...." : "Update Profile"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </section>
      <ToastContainer />
    </div>
  );
}
