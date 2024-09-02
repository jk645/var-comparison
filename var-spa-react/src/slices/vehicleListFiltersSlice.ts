import { createSlice } from "@reduxjs/toolkit";

export const vehicleListFiltersSlice = createSlice({
  name: "vehicleListFilters",
  initialState: {
    filterText: "",
    unassignedOnly: false,
  },
  reducers: {
    setFilterText: (state, action) => {
      state.filterText = action.payload;
    },
    setUnassignedOnly: (state, action) => {
      state.unassignedOnly = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFilterText, setUnassignedOnly } = vehicleListFiltersSlice.actions;

export default vehicleListFiltersSlice.reducer;
