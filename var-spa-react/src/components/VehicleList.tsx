import { Vehicle } from "../interfaces/vehicle";
import VehicleListItem from "./VehicleListItem";

export default function VehicleList({ vehicleList }: {vehicleList: Vehicle[]}) {
  const listItems = vehicleList.map(vehicle => 
    <li key={vehicle.id}>
      <VehicleListItem vehicle={vehicle} />
    </li>
  );

  return (
    <ul>
      {listItems}
    </ul>
  );
}
