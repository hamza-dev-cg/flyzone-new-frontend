import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from '../../utils/common';
export const EventUploadApi = createApi({
  reducerPath: "EventUpload",
  baseQuery,
  endpoints: (builder) => ({
    GetEvent: builder.mutation({
      query: () => ({
        url: `/api/events`,
        method: "GET",
      }),
    }),
    CreateEventsTypes: builder.mutation({
      query: (data) => ({
        url: `/api/events`,
        method: "POST",
        body: data,
      }),
    }),
    CreateEvent: builder.mutation({
      query: (data) => ({
        url: `/api/event-details`,
        method: "POST",
        body: data,
      }),
    }),
    GetEventDetails: builder.mutation({
      query: (data) => ({
        url: `/api/event-details?title=${data}`,
        method: "GET",
      }),
    }),
    DeleteEvent: builder.mutation({
      query: (data) => ({
        url: `/api/events/${data}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetEventMutation,
  useCreateEventsTypesMutation,
  useCreateEventMutation,
  useDeleteEventMutation,
  useGetEventDetailsMutation
} = EventUploadApi;
