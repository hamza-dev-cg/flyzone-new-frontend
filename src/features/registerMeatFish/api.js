import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {baseQuery} from '../../utils/common'
export const RegisterMeatFishApi = createApi({
  reducerPath: "TournamentData",
  baseQuery,
  endpoints: (builder) => ({
    RegisterTournament: builder.mutation({
      query: (data) => ({
        url: `/api/tournament/add`,
        method: "POST",
        body: data,
      }),
    }),
    UpdateRegisterUser: builder.mutation({
      query: (userId , data) => ({
        url: `/api/user/update?userId=${userId}`,
        method: "PUT",
        body: data,
      }),
    }),
    MeatFishRegisterTournament: builder.mutation({
      query: (data) => ({
        url: `/api/registration/west-and-meat-fish`,
        method: "POST",
        body: data,
      }),
    }),
    GetTournamentEventId: builder.mutation({
      query: (id) => ({
        url: `/api/reg-tournaments?event_id=${id}`,
        method: "GET",
      }),
    }),

    GetPaymentHistory: builder.mutation({
      query: (id) => ({
        url: `/api/user/payments/history`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useMeatFishRegisterTournamentMutation,
  useRegisterTournamentMutation,useUpdateRegisterUserMutation , useGetTournamentEventIdMutation,useGetPaymentHistoryMutation
} = RegisterMeatFishApi;
