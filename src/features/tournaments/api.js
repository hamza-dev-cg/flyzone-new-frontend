import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { productionBaseUrl, DevbaseUrl } from "../../apis/base";
import {baseQuery} from '../../utils/common';

export const TournamentApi = createApi({
  reducerPath: "Tournament",
  baseQuery,
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

    GetAllTournamentForAdmin: builder.mutation({
      query: () => ({
        url: `/api/tournament/get-all-tournament-categories`,
        method: "GET",
      }),
    }),

    CreateTournamentForAdmin: builder.mutation({
      query: (data) => ({
        url: `/api/tournament/create-tournament-category`,
        method: "POST",
        body: data,
      }),
    }),
    DeleteTournamentForAdmin: builder.mutation({
      query: (id) => ({
        url: `/api/tournament/delete-tournament-category/${id}`,
        method: "DELETE",
      }),
    }),
    CreateTournamentEventForAdmin: builder.mutation({
      query: (data) => ({
        url: `/api/tournament//create-tournament-event`,
        method: "POST",
        body:data
      }),
    }),
    CreateTournamentCategoryForAdmin: builder.mutation({
      query: (id) => ({
        url: `/api/tournament/get-tournament-category/${id}`,
        method: "GET",
      }),
    }),
    DeleteTournamentCategoryForAdmin: builder.mutation({
      query: (id) => ({
        url: `/api/tournament/delete-tournament-category/${id}`,
        method: "DELETE",
      }),
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
  useDeleteTournamentForAdminMutation,
  useEventforPaymentTournamentMutation,
  useGetAllTournamentForAdminMutation,
  useCreateTournamentForAdminMutation,
  useCreateTournamentCategoryForAdminMutation,
  useDeleteTournamentCategoryForAdminMutation,
  useCreateTournamentEventForAdminMutation,
} = TournamentApi;
