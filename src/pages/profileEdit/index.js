import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Line from "../../assets/images/line.png";
import { useSelector, useDispatch } from "react-redux";
import { CiCamera } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import { setUser } from "../../features/user/userSlice";
import { useUpdateUserMutation } from "../../features/user/api";
import "../../assets/css/profile.css";
import Avatar from "react-avatar";

export default function ProfileEdit() {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user?.user);
  const token = useSelector((state) => state.user?.token);
  const [UpdateRegisterUser] = useUpdateUserMutation();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (userData) {
      reset({
        firstName: userData?.firstName || "",
        lastName: userData?.lastName || "",
        email: userData?.email || "",
        address: userData?.address || "",
        city: userData?.city || "",
        state: userData?.state || "",
        zipCode: userData?.zipCode || "",
        phoneNo: userData?.phoneNo || "",
        boatName: userData?.boatName || "",
      });
      setPreview(userData?.imageUrl || "");
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
      // const formData = new FormData();

      // Object.keys(data).forEach((key) => {
      //   formData.append(key, data[key]);
      // });

      // if (imageFile) {
      //   formData.append("profile_image", imageFile);
      // }

      const response = await UpdateRegisterUser({ data,  userId: userData.id, token});
      if (response?.data?.success) {
        toast.success("Profile updated successfully!");
        localStorage.setItem("user", JSON.stringify(response?.data?.user));
        dispatch(setUser({ user: response?.data?.user }));
        setPreview(userData.imageUrl);
      } 
    } catch (error) {
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
                    <Avatar size="120" name={userData?.firstName} src={userData?.imageUrl} round={true} />

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
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                    />
                    {errors.name && (
                      <span className="text-danger font-12">
                        {errors.firstName.message}
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
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                    />
                    {errors.lastName && (
                      <span className="text-danger font-12">
                        {errors.lastName.message}
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
                      {...register("zipCode")}
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
                      {...register("phoneNo")}
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
                      {...register("boatName")}
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
