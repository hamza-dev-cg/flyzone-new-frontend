import { createSlice } from "@reduxjs/toolkit";

export const tournamentSlice = createSlice({
    name: "tournament",
    initialState: {
        tournament: null,
    },
    reducers: {
        setTournament: (state, action) => {
            state.tournament = action.payload;
        }
    },
});

export const { setTournament } = tournamentSlice.actions;
export const selectTournament = (state) => state.tournament;
export default tournamentSlice.reducer;
