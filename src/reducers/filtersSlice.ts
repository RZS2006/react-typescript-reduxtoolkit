import { createSlice } from "@reduxjs/toolkit";

export enum FiltersEnum {
  All = "ALL",
  Completed = "COMPLETED",
  NonCompleted = "NON_COMPLETED"
}

const initialState: FiltersEnum = FiltersEnum.All;

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      return action.payload;
    }
  }
});

export const { setFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
