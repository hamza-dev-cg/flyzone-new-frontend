import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DevbaseUrl, productionBaseUrl } from '../apis/base';
const isAuthenticated = localStorage.getItem("authToken");

// Simulate an API call for login
export const getChatThread = createAsyncThunk(
  'chat',
   async (value, { rejectWithValue }) => {
    try {
      const response = await fetch(`${productionBaseUrl}/api/forum-subcategories?name=${value}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        'Authorization': `Bearer ${isAuthenticated}` 
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || 'Failed to fetch chat thread');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching chat thread:", error);
      return rejectWithValue(error.message || "An unknown error occurred");
    }
  }
);
export const getComments = createAsyncThunk(
  'comments-message',
  async (id, { rejectWithValue }) => {
    try {

      const response = await fetch(`${DevbaseUrl}/api/chat/messages/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${isAuthenticated}`,
        },
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || 'Failed to fetch chat thread');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching chat thread:", error);
      return rejectWithValue(error.message || "An unknown error occurred");
    }
  }
);
export const getThread = createAsyncThunk(
  'chat',
   async (formData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${productionBaseUrl}/api/chat/send`, {
        method: 'POST',
       headers: {
          "Authorization": `Bearer ${isAuthenticated}`,
        },
         body: formData
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || 'Failed to fetch chat thread');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching chat thread:", error);
      return rejectWithValue(error.message || "An unknown error occurred");
    }
  }
);

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    loading: false,
    error: null,
    message: '',
    data: [],
    commentData: [],
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.error = null;
      state.forgotPasswordSuccess = null;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getChatThread.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getChatThread.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.message = action.payload.message || [];
        state.data = action?.payload?.data[0]?.threads 
      })
      .addCase(getChatThread.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Login failed';
      })
      .addCase(getComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.loading = false;
        state.commentData = action.payload.messages
      })
      .addCase(getComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
      })
  },
});

export const { logout } = chatSlice.actions;
export default chatSlice.reducer;