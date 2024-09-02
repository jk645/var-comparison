import { useDispatch, useSelector } from "react-redux";
import { setFilterText, setUnassignedOnly } from "../slices/vehicleListFiltersSlice";

export default function VehicleListFilters() {
  const filterText = useSelector((state: any) => state.vehicleListFilters.filterText);
  const unassignedOnly = useSelector((state: any) => state.vehicleListFilters.unassignedOnly);
  const dispatch = useDispatch();

  return (
    <form>
      <label>
        Driver
        <input
          type="text"
          value={filterText}
          onChange={(e) => dispatch(setFilterText(e.target.value))}
        />
      </label>
      <label>
        Unassigned
        <input
          type="checkbox"
          checked={unassignedOnly}
          onChange={(e) => dispatch(setUnassignedOnly(e.target.checked))}
        />
      </label>
    </form>
  );
}
