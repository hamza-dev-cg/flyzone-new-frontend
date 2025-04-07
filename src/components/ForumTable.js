import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  useGetTypesMutation,
  useGetByIdCategoryMutation,
} from "../features/forum/api";
import "../assets/css/forumTable.css";


export default function ForumTable() {
  const [loading, setLoading] = useState(true);
  const [GetTypes] = useGetTypesMutation();
  const [GetCategory] = useGetByIdCategoryMutation();
  const [types, setTypes] = useState([]);
  const [subCategoryCounts, setSubCategoryCounts] = useState({});

  // Fetch Types (with Categories)
  const GetTypesData = async () => {
    setLoading(true);
    try {
      const response = await GetTypes();
      setTypes(response?.data?.data || []);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    GetTypesData();
  }, []);

  // Fetch Subcategory Count for Each Category
  const fetchSubCategoryLength = async (categoryId) => {
    try {
      const response = await GetCategory(categoryId);
      const subCategoryLength =
        response?.data?.data?.sub_categories?.length || 0;
      setSubCategoryCounts((prev) => ({
        ...prev,
        [categoryId]: subCategoryLength,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  // When Types are Fetched, Fetch Subcategory Counts
  useEffect(() => {
    if (types.length > 0) {
      types.forEach((type) => {
        type.category.forEach((forum) => {
          fetchSubCategoryLength(forum.id);
        });
      });
    }
  }, [types]);

  return (
    <div className="container forum-container mt-4">
      {loading && (
        <div className="d-flex justify-content-center align-items-center mt-4 p-5">
          <div className="spinner-border text-primary" role="status"></div>
        </div>
      )}

      {!loading && types?.length === 0 && (
        <p className="text-center mt-4">No Forum Types found</p>
      )}

      {!loading &&
        types?.map((type) => (
          <div key={type.id}>
            <h2 className="text-center mb-5">
              {type.name} <span>Forums</span>
            </h2>

            <div className="main-forum-table">
              <div className="forum-table-head">
                <div className="head">
                  <p>Forum</p>
                </div>
                <div className="head">
                  <p>Posted On</p>
                </div>
                <div className="text-center">
                  <p>Posts</p>
                </div>
              </div>

              {type?.category?.length === 0 ? (
                <p className="text-center mt-4">No subcategories available</p>
              ) : (
                type?.category?.slice(0, 5).map((forum, index) => (
                  <Link
                    to={`/forum/category/${forum?.id}`}
                    key={forum.id}
                    className="text-decoration-none text-black"
                  >
                    <div
                      className={`forum-table-body ${
                        index === type?.category?.length - 1 ? "last-item" : ""
                      }`}
                    >
                      <div className="forum-column-1">
                        <h2>{forum.name}</h2>
                        <p>
                          {forum.description?.length > 70
                            ? forum.description.slice(0, 70) + "..."
                            : forum.description}
                        </p>
                      </div>
                      <div className="forum-column-2">
                        <h2>
                          {new Date(forum?.created_at).toLocaleDateString()}
                        </h2>
                        <div className="forum-column-img">
                          {/* <p>By</p>
                                                    <div className="forum-img">
                                                        <img src={ForumImg} alt="forum-image" width={20} />
                                                    </div> */}
                          {/* <p>{new Date(forum?.created_at).toLocaleDateString()}</p> */}
                        </div>
                      </div>
                      {/* Display Subcategory Length */}
                      <h2 className="text-center">
                        {subCategoryCounts[forum.id] || 0}
                      </h2>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        ))}
    </div>
  );
}
