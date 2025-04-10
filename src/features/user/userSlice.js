import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        token: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action?.payload?.user;
            state.token = action?.payload?.token;
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem("authToken");

        },
    },
});

export const { setUser, logout } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
