import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DevbaseUrl } from '../../apis/base'
export const ForumApi = createApi({
  reducerPath: "Forum",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://flyzone.ai/flyzone_laravel',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    GetCategory: builder.mutation({
      query: () => ({
        url: `/api/forum-categories`,
        method: "GET",
      }),
    }),
    GetTypes: builder.mutation({
      query: () => ({
        url: `/api/forum-types`,
        method: "GET",
      }),
    }),
    GetByIdCategory: builder.mutation({
      query: (id) => ({
        url: `/api/forum-categories/${id}`,
        method: "GET",
      }),
    }),
    GetByIdThreads: builder.mutation({
      query: (id) => ({
        url: `/api/threads/${id}`,
        method: "GET",
      }),
    }),
    GetByIdTypes: builder.mutation({
      query: (id) => ({
        url: `/api/forum-subcategories/${id}`,
        method: "GET",
      }),
    }),
    GetSubCategory: builder.mutation({
      query: (value) => ({
        url: `/api/forum-subcategories?name=${value}`,
        method: "GET",
      }),
    }),
    CreateTypes: builder.mutation({
      query: (data) => ({
        url: `/api/forum-types`,
        method: "POST",
        body: data,
      }),
    }),
    CreateCategory: builder.mutation({
      query: (data) => ({
        url: `/api/forum-categories`,
        method: "POST",
        body: data,
      }),
    }),
    GetOneThreadComments: builder.mutation({
      query: (id) => ({
        url: `/api/chat/messages/${id}`,
        method: "GET",
      }),
    }),
    CreateSubCategory: builder.mutation({
      query: (data) => ({
        url: `/api/forum-subcategories`,
        method: "POST",
        body: data,
      }),
    }),
    CreateThread: builder.mutation({
      query: (data) => ({
        url: `/api/threads`,
        method: "POST",
        body: data,
      }),
    }),
    CreateComment: builder.mutation({
      query: (data) => ({
        url: `/api/chat/send`,
        method: "POST",
        body: data,
      }),
    }),
    UpdateForum: builder.mutation({
      query: (data) => ({
        url: `/api/forum-categories`,
        method: "POST",
        body: data,
      }),
    }),
    DeleteCategory: builder.mutation({
      query: (data) => ({
        url: `/api/forum-categories/${data}`,
        method: "DELETE",
      }),
    }),
    DeleteTypes: builder.mutation({
      query: (data) => ({
        url: `/api/forum-types/${data}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetCategoryMutation,
  useGetTypesMutation,
  useGetByIdThreadsMutation,
  useCreateCategoryMutation,
  useCreateTypesMutation,
  useCreateSubCategoryMutation,
  useCreateThreadMutation,
  useUpdateForumMutation,
  useDeleteCategoryMutation,
  useDeleteTypesMutation,
  useGetByIdCategoryMutation,
  useGetByIdTypesMutation,
  useCreateCommentMutation,
  useGetOneThreadCommentsMutation,
  useGetSubCategoryMutation
} = ForumApi;
