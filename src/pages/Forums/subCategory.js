import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { BiPlus } from "react-icons/bi";
import {
    useGetByIdTypesMutation,
    useCreateThreadMutation,
    useGetOneThreadCommentsMutation
} from "../../features/forum/api";
import { convertToFormData, getTokenFromLocalStorage } from "../../utils/helpers";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Line from "../../assets/images/small-line.svg";
import "../../assets/css/forumTable.css";

const schema = yup.object().shape({
    name: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
});

export default function SubCategoryTable() {
    const { id } = useParams();
    const [addThread, setAddThread] = useState(false);
    const [categories, setCategories] = useState([]);
    const [createThread, { isLoading: isCreating }] = useCreateThreadMutation();
    const [GetComments] = useGetOneThreadCommentsMutation();
    const [CommentsCounts, setCommentsCounts] = useState({});
    const [loading, setLoading] = useState(true);
    const [GetCategoryById, { isLoading }] = useGetByIdTypesMutation();
    const [imagePreview, setImagePreview] = useState(null);
    const [videoPreview, setVideoPreview] = useState(null);
    const [videoType, setVideoType] = useState(null);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);
    const navigate = useNavigate()

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileURL = URL.createObjectURL(file);
            setImage(file);
            setImagePreview(fileURL);
        }
    };

    const handleVideoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileURL = URL.createObjectURL(file);
            setVideo(file);
            setVideoPreview(fileURL);
            setVideoType(file.type);
        }
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: { name: "", description: "", image: "", video: "" },
    });

    const onSubmit = async (data) => {
        try {
            const payload = {
                name: data.name,
                description: data.description,
                forum_sub_category_id: id,
                image: image,
            };

            const formData = convertToFormData(payload);
            const response = await createThread(formData).unwrap();

            if (response?.success) {
                toast.success(response?.message);
                reset();
                GetCategoryData();
                setAddThread(false);
            } else {
                toast.error(response?.message);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };


    const GetCategoryData = async () => {
        setLoading(true)
        try {
            const response = await GetCategoryById(id);
            const categoryData = response?.data?.data || {};
            setCategories(categoryData);
            if (categoryData?.threads?.length > 0) {
                fetchCommentsCounts(categoryData?.threads);
            }
        } catch (error) {
            console.error("Fetch Error:", error);
        }
        setLoading(false)
    };
    useEffect(() => {
        GetCategoryData();
    }, [id, GetCategoryById]);

    const fetchCommentsCounts = async (subCategories) => {
        let threadData = {};
        for (const thread of subCategories) {
            try {
                const response = await GetComments(thread.id);
                threadData[thread.id] = response?.data?.messages?.length || 0;
            } catch (error) {
                threadData[thread.id] = 0;
            }
        }
        setCommentsCounts(threadData);
    };

    useEffect(() => {
        const checkLoginStatus = async () => {
            const tokenValidation = await getTokenFromLocalStorage();
            setIsUserLoggedIn(!!tokenValidation.token);
        };
        checkLoginStatus();
    }, []);



    return (
        <>
            <div className="container layout-space d-flex justify-content-end">
                <Button
                    startIcon={<BiPlus />}
                    onClick={() => setAddThread(true)}
                    text="Add Thread"
                    disabled={!isUserLoggedIn}
                />
            </div>

            <div className="container forum-container">
                <div >
                    {loading ? (
                        <div className="d-flex justify-content-center align-items-center mt-4">
                            <div className="spinner-border text-primary" role="status"></div>
                        </div>
                    ) : (
                        <>
                            <h2 className="text-center mb-5">
                                {categories?.name} <span>Forums</span>
                            </h2>
                            <div className="main-forum-table ">
                                <div className="forum-table-head">
                                    <div className="head">
                                        <p>Threads</p>
                                    </div>
                                    <div className="head">
                                        <p>Posted On</p>
                                    </div>
                                    <div className="head text-center">
                                        <p>Comments</p>
                                    </div>
                                </div>

                                {/* Check if there are threads */}
                                {categories?.threads?.length === 0 ? (
                                    <p className="text-center mt-4">No subcategories available</p>
                                ) : (
                                    categories?.threads?.map((forum, index) => (
                                        <Link
                                            to={`/forum/detail/${forum.id}`}
                                            key={forum.id}
                                            className="text-decoration-none text-black"
                                        >
                                            <div
                                                className={`forum-table-body ${index === categories?.threads?.length - 1
                                                    ? "last-item"
                                                    : ""
                                                    }`}
                                            >
                                                <div className="forum-column-1">
                                                    <h2>{forum.name}</h2>
                                                    <p>
                                                        {forum.description.length > 70
                                                            ? forum.description.slice(0, 50) + "..."
                                                            : forum.description}
                                                    </p>
                                                </div>
                                                <div className="forum-column-2">
                                                    <h2>{new Date(forum?.created_at).toLocaleDateString()}</h2>

                                                    <div className="forum-column-img">
                                                        {/* <p>By</p>
                                                        <div className="forum-img">
                                                            <img src={ForumImg} alt="forum-image" width={20} />
                                                        </div> */}
                                                        {/* <p>{new Date(forum?.created_at).toLocaleDateString()}</p> */}
                                                    </div>
                                                </div>
                                                <h2 className="text-center">{CommentsCounts[forum.id] || 0}</h2>
                                            </div>
                                        </Link>
                                    ))
                                )}
                            </div>
                        </>
                    )}
                </div>

                {addThread && (
                    <Modal show={addThread} handleClose={() => setAddThread(false)}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="text-center">
                                <h1>Add Thread</h1>
                                <img src={Line} alt="no-icon" />
                            </div>
                            <div className="modal-inner-content">
                                <div className="d-flex flex-column gap-3">
                                    {/* Title Input */}
                                    <label>Title</label>
                                    <input
                                        type="text"
                                        placeholder="Title"
                                        className="w-100"
                                        name="name"
                                        {...register("name")}
                                    />
                                    {errors.name && <p className="text-danger">{errors.name.message}</p>}

                                    {/* Description Input */}
                                    <label>Description</label>
                                    <textarea
                                        placeholder="Description"
                                        className="w-100"
                                        name="description"
                                        {...register("description")}
                                    />
                                    {errors.description && <p className="text-danger">{errors.description.message}</p>}

                                    <label>Upload Image</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="w-100"
                                        {...register("image", {
                                            required: "Please upload an image",
                                            validate: (file) => file[0]?.size < 5 * 1024 * 1024 || "Image must be less than 5MB",
                                        })}
                                        onChange={handleImageChange}
                                    />

                                    {imagePreview && (
                                        <div className="mt-3 text-center">
                                            <img src={imagePreview} alt="Image Preview" className="img-fluid" width={100} />
                                        </div>
                                    )}

                                    {/* <label>Upload Video</label>
                                    <input
                                        type="file"
                                        accept="video/*"
                                        className="w-100"
                                        {...register("video", {
                                            required: "Please upload a video",
                                            validate: (file) => file[0]?.size < 10 * 1024 * 1024 || "Video must be less than 10MB",
                                        })}
                                        onChange={handleVideoChange}
                                    />

                                    {videoPreview && (
                                        <div className="mt-3">
                                            <video controls className="img-fluid">
                                                <source src={videoPreview} type={videoType} />
                                            </video>
                                        </div>
                                    )} */}
                                </div>
                            </div>

                            <div className="d-flex gap-3 justify-content-center">
                                <Button
                                    width="180px"
                                    text="Close"
                                    onClick={() => setAddThread(false)}
                                />
                                <Button
                                    width="180px"
                                    type="submit"
                                    text={isCreating ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2"></span> Submitting...
                                        </>
                                    ) : "Submit"}
                                />
                            </div>
                        </form>
                    </Modal>
                )}
                <ToastContainer />
            </div>
        </>

    );
}
