const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  currentPage: 0,
  maxPage: 10
};

const viewer = createSlice({
  name: "viewer",
  initialState,
  reducers: {
    change(state, action) {
      console.log(state);
      console.log(action.payload);
    }
  }
});

export const viewerReducer = viewer.reducer;
export const viewerActions = viewer.actions;
