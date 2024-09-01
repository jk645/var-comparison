import { useState } from "react";
import { Vehicle } from "../interfaces/vehicle";
import VehicleListFilters from "./VehicleListFilters";
import VehicleListItem from "./VehicleListItem";

export default function VehicleList({ vehicleList }: {vehicleList: Vehicle[]}) {
  const [filterText, setFilterText] = useState("");
  const [unassignedOnly, setUnassignedOnly] = useState(false);

  const listItems = vehicleList
    .filter(v => v.id.includes(filterText))  // Apply text filter
    .filter(v => unassignedOnly ? !v.location : true)  // Apply "unassigned only" filter
    .map(v => 
      <li key={v.id}>
        <VehicleListItem vehicle={v} />
      </li>
    );

  return (
    <>
      <VehicleListFilters
        filterText={filterText}
        setFilterText={setFilterText}
        unassignedOnly={unassignedOnly}
        setUnassignedOnly={setUnassignedOnly}
      />
      <ul>
        {listItems}
      </ul>
    </>
  );
}
