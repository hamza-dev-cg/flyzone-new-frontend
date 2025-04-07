import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://flyzone.ai/flyzone_laravel',
  }),
  endpoints: (builder) => ({
    LoginUser: builder.mutation({
      query: (data) => ({
        url: `/api/auth/login`,
        method: "POST",
        body: data,
      }),
    }),
    UpdateUser: builder.mutation({
      query: (data) => ({
        url: `/api/auth/login`,
        method: "POST",
        body: data,
      }),
    }),
    RegisterUser: builder.mutation({
      query: (data) => ({
        url: `/api/auth/user/register`,
        method: "POST",
        body: data,
      }),
    }),
    VerifyOtp: builder.mutation({
      query: (data) => ({
        url: `/api/auth/verify-otp`,
        method: "POST",
        body: data,
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

export const { useLoginUserMutation, useRegisterUserMutation, useVerifyOtpMutation, useResendOtpMutation } = userApi;
