import { useLoaderData } from "react-router-dom";
import { getVehicleDetails } from "../helpers/vehicles";
import { Vehicle } from "../interfaces/vehicle";
import VehicleDetails from "../components/VehicleDetails";

export async function loader({ params }: any) {
  const vehicleDetails = await getVehicleDetails(params.id);
  return { vehicleDetails };
}

export default function VehicleDetailsRoute() {
  const { vehicleDetails } = useLoaderData() as { vehicleDetails: Vehicle };

  return (
    <div>
      <h1>Vehicle Details</h1>
      <VehicleDetails vehicleDetails={vehicleDetails} />
    </div>
  );
}
