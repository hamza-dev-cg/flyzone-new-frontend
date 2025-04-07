import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { productionBaseUrl, DevbaseUrl } from "../../apis/base";

export const TournamentApi = createApi({
  reducerPath: "Tournament",
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
    GetTournament: builder.mutation({
      query: () => ({
        url: `/api/tournaments`,
        method: "GET",
      }),
    }),
  
    CreateTournament: builder.mutation({
      query: (data) => ({
        url: `/api/create-tournament`,
        method: "POST",
        body: data,
      }),
    }),
    UpdateTournament: builder.mutation({
      query: (data) => ({
        url: `/api/update-tournament`,
        method: "POST",
        body: data,
      }),
    }),
    DeleteTournament: builder.mutation({
      query: (data) => ({
        url: `/api/tournaments/${data}`, 
        method: "DELETE",
      }),
    }),
    EventforPaymentTournament: builder.mutation({
      query: (data) => ({
        url: `api/tournament/add`,
        method: "POST",
        body: data,
      }),
    }),
    DeleteRegTournament: builder.mutation({
      query: (id) => ({
        url: `/api/tournament/delete/${id}`,
        method: "DELETE",
      }),
    }),
    EditRegTournament: builder.mutation({
      query: (data) => {
        const { id, ...rest } = data;
        return {
          url: `/api/tournament/update/${id}`,
          method: "PUT",
          body: rest,
        };
      },
    }),
  }),
});

export const {
  useGetTournamentMutation,
  useCreateTournamentMutation,
  useUpdateTournamentMutation,
  useDeleteTournamentMutation,
  useDeleteRegTournamentMutation,
  useEditRegTournamentMutation,
  useEventforPaymentTournamentMutation
} = TournamentApi;
