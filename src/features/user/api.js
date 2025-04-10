import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://10.229.220.25",
    prepareHeaders: (headers, { getState }) => {
      // You can add default headers here if needed
      return headers;
    },
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
  useUpdateUserMutation
} = userApi;
