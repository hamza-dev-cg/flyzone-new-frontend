import { createSlice } from "@reduxjs/toolkit";

export const tournamentSlice = createSlice({
    name: "EventUpload",
    initialState: {
        eventUpload: null,
    },
    reducers: {
        setTournament: (state, action) => {
            state.tournament = action.payload.tournament;
        }
    },
});

export const { setTournament } = tournamentSlice.actions;
export const selectTournament = (state) => state.tournament;
export default tournamentSlice.reducer;