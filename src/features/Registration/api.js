import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DevbaseUrl } from "../../apis/base"; 
import { baseQuery } from "../../utils/common"; 
export const RegistrationApi = createApi({
  reducerPath: "TournamentApi",
  baseQuery,
  endpoints: (builder) => ({
    getTournamentBySlug: builder.query({
      query: (eventName) => ({
        url: `/api/tournament/get-tournament-event/slug/${eventName}`,
        method: "GET",
      }),
    }),

    registerForTournament: builder.mutation({
      query: (eventId) => ({
        url: `/api/registration/burunu-buma`,
        method: "POST",
        body: { eventId },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`, 
        },
      }),
    }),
  }),
});

export const {
  useGetTournamentBySlugQuery,
  useRegisterForTournamentMutation,
} = RegistrationApi;
