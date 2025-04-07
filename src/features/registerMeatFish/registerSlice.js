import { createSlice } from "@reduxjs/toolkit";

export const registerMeatFishSlice = createSlice({
    name: "registerMeatFish",
    initialState: {
        data: null,  
        tournament:null
    },
    reducers: {
        setTournamentData: (state, action) => {
            state.data = action.payload.tournament; 
        }
    },
});

export const { setTournamentData } = registerMeatFishSlice.actions;
export const selectTournamentData = (state) => state.registerMeatFish.data;
export default registerMeatFishSlice.reducer;
