import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://172.229.220.21:8000',
  }),
  endpoints: (builder) => ({
    LoginUser: builder.mutation({
      query: (data) => ({
        url: `/api/auth/login`,
        method: "POST",
        body: data,
      }),
    }),
    GetOneUser: builder.mutation({
      query: ({ token, id }) => ({
        url: `/api/user/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    GetAllUser: builder.mutation({
      query: ({ token }) => ({
        url: `/api/user/all`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    UpdateUser: builder.mutation({
      query: ({ data, token, userId }) => ({
        url: `/api/user/update?userId=${userId}`,
        method: "PUT",
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    RegisterUser: builder.mutation({
      query: (data) => ({
        url: `/api/auth/register`,
        method: "POST",
        body: data,
      }),
    }),
    AddMemeber: builder.mutation({
      query: ({data, token}) => ({
        url: `api/registration/add-team-members`,
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    GetEventBySlug: builder.mutation({
      query: (slug) => ({
        url: `api/tournament/get-tournament-event/slug/${slug}`,
        method: "GET",
      }),
    }),
    uploadImage: builder.mutation({
      query: ({data, token}) => ({
        url: `/api/upload/image`,
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    VerifyOtp: builder.mutation({
      query: ({ finalOtp, token }) => ({
        url: `/api/auth/verification/${finalOtp}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    ResendOtp: builder.mutation({
      query: (data) => ({
        url: `/api/auth/send-otp`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useResendOtpMutation,
  useVerifyOtpMutation,
  useUpdateUserMutation,
  useGetOneUserMutation,
  useAddMemeberMutation,
  useGetAllUserMutation,
  useGetEventBySlugMutation,
  useUploadImageMutation
} = userApi;
