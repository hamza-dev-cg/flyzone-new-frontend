import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    selectedTournamentId: null,
    registrationStatus: "idle", 
    error: null,
  };
export const RegisterSlice = createSlice({
    name: "Register",
    initialState,
    reducers: {
        setRegister: (state, action) => {
            state.Register = action.payload;
        }
    },
});

export const { setRegister } = RegisterSlice.actions;
export const selectTournament = (state) => state.Register;
export default RegisterSlice.reducer;
