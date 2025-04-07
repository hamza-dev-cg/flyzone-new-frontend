import { createSlice } from "@reduxjs/toolkit";

export const forumSlice = createSlice({
    name: "forum",
    initialState: {
        forum: null,
    },
    reducers: {
        setForum: (state, action) => {
            state.forum = action.payload.forum;
        }
    },
});

export const { setForum } = forumSlice.actions;
export const selectForum = (state) => state.forum;
export default forumSlice.reducer;
