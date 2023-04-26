import { createSelector } from "@reduxjs/toolkit";
import { status } from "./constants";

export const selectUsers = (state) => state.users.items;

export const selectIsLoading = (state) => state.users.isLoading;

export const selectError = (state) => state.users.error;

export const selectFilterStatus = (state) => state.filter.status;

export const selectVisibleUsers = createSelector(
  [selectUsers, selectFilterStatus],
  (users, statusFilter) => {
    switch (statusFilter) {
      case status.follow:
        return users.filter((user) => !user.follow);
      case status.followings:
        return users.filter((user) => user.follow);
      default:
        return users;
    }
  }
);
