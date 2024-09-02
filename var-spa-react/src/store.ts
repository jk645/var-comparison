import { configureStore } from "@reduxjs/toolkit";
import vehicleListFiltersReducer from "./slices/vehicleListFiltersSlice";

export default configureStore({
  reducer: {
    vehicleListFilters: vehicleListFiltersReducer,
  }
});
