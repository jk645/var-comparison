import { useLoaderData } from "react-router-dom";
import VehicleList from "../components/VehicleList";
import { getVehicleList } from "../helpers/vehicles";
import { Vehicle } from "../interfaces/vehicle";

export async function loader() {
  const vehicleList = await getVehicleList();
  return { vehicleList };
}

export default function HomeRoute() {
  const { vehicleList } = useLoaderData() as { vehicleList: Vehicle[] };

  return (
    <div>
      <h1>Home</h1>
      <VehicleList vehicleList={vehicleList} />
    </div>
  );
}
