const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  currentPage: 0,
  maxPage: 10
};

const viewer = createSlice({
  name: "viewer",
  initialState,
  reducers: {
    scrollDown(state) {
      if (state.maxPage !== state.currentPage) {
        state.currentPage--;
      }
    },
    scrollUp(state) {
      if (state.maxPage !== state.currentPage) {
        state.currentPage++;
      }
    },
    pageChange(state, action) {
      let { payload } = action;
      const newState = { ...state, ...payload };
      Object.assign(state, newState);
    }
  }
});

export const viewerScrollReducer = viewer.reducer;
export const viewerScrollActions = viewer.actions;
