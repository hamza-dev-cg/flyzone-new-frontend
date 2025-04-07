import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  useGetByIdCategoryMutation,
  useGetByIdTypesMutation,
} from "../../features/forum/api";
import "../../assets/css/forumTable.css";

export default function Category() {
  const [GetCategoryById] = useGetByIdCategoryMutation();
  const [GetThreadById] = useGetByIdTypesMutation();
  const [categories, setCategories] = useState([]);
  const [threadCounts, setThreadCounts] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  // Fetch categories
  const GetCategoryData = async () => {
    setLoading(true);
    try {
      const response = await GetCategoryById(id);
      const categoryData = response?.data?.data || {};
      setCategories(categoryData);
      if (categoryData?.sub_categories?.length > 0) {
        fetchThreadCounts(categoryData?.sub_categories);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  // Fetch thread count for each subcategory
  const fetchThreadCounts = async (subCategories) => {
    let threadData = {};
    for (const subCategory of subCategories) {
      try {
        const response = await GetThreadById(subCategory.id);
        threadData[subCategory.id] = response?.data?.data?.threads?.length || 0;
      } catch (error) {
        console.log(`Error fetching threads for ${subCategory.id}:`, error);
        threadData[subCategory.id] = 0;
      }
    }
    setThreadCounts(threadData);
  };

  useEffect(() => {
    GetCategoryData();
  }, []);

  return (
    <>
      <div className="container layout-space forum-container">
        <div className="mt-4">
          {/* Show Loader When Loading */}
          {loading ? (
            <div className="d-flex justify-content-center align-items-center mt-4">
              <div className="spinner-border text-primary" role="status"></div>
            </div>
          ) : (
            <>
              <h2 className="text-center mb-5">
                {categories.name} <span>Forums</span>
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
                    <p>Threads</p>
                  </div>
                </div>

                {/* If No Subcategories Exist */}
                {categories?.sub_categories?.length === 0 ? (
                  <p className="text-center mt-4">No subcategories available</p>
                ) : (
                  categories?.sub_categories?.map((forum, index) => (
                    <Link
                      to={`/forum/subcategory/${forum.id}`}
                      key={forum.id}
                      className="text-decoration-none text-black"
                    >
                      <div
                        className={`forum-table-body ${
                          index === categories?.sub_categories?.length - 1
                            ? "last-item"
                            : ""
                        }`}
                      >
                        <div className="forum-column-1">
                          <h2>{forum.name}</h2>
                          <p>
                            {forum.description.length > 70
                              ? forum.description.slice(0, 70) + "..."
                              : forum.description}
                          </p>
                        </div>
                        <div className="forum-column-2">
                          <h2>
                            {new Date(forum?.created_at).toLocaleDateString()}
                          </h2>
                        </div>
                        <h2 className="text-center">
                          {threadCounts[forum.id] || 0}
                        </h2>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
