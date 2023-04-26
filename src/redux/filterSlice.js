import { createSlice } from "@reduxjs/toolkit";
import { status } from "./constants";

const filtersInitialState = {
  status: status.all,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setFilterStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setFilterStatus } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;