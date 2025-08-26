import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: [],
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
    removeFeed: (state, action) => {
      return state.filter((feed) => feed._id != action.payload);
    },
  },
});

export default feedSlice.reducer;
export const { addFeed, removeFeed } = feedSlice.actions;
