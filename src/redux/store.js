import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./userSlice";
import { filtersReducer } from "./filterSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    filter: filtersReducer,
  },
});
