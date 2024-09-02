import { Vehicle } from "../interfaces/vehicle";
import VehicleListFilters from "./VehicleListFilters";
import VehicleListItem from "./VehicleListItem";
import { useSelector } from "react-redux";

export default function VehicleList({ vehicleList }: {vehicleList: Vehicle[]}) {
  const filterText = useSelector((state: any) => state.vehicleListFilters.filterText);
  const unassignedOnly = useSelector((state: any) => state.vehicleListFilters.unassignedOnly);

  const listItems = vehicleList
    .filter(v => v.driver.includes(filterText))  // Apply text filter
    .filter(v => unassignedOnly ? !v.driver : true)  // Apply "unassigned only" filter
    .map(v => 
      <li key={v.id}>
        <VehicleListItem vehicle={v} />
      </li>
    );

  return (
    <>
      <VehicleListFilters />
      <ul>
        {listItems}
      </ul>
    </>
  );
}
