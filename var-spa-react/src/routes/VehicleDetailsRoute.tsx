import { useLoaderData } from "react-router-dom";

export async function loader({ params }: any) {
  // TODO: call helper function that calls API
  const vehicleDetails = {
    id: params.id,
    name: "hello",
    type: "good",
  };
  return { vehicleDetails };
}

export default function VehicleDetailsRoute() {
  const { vehicleDetails }: any = useLoaderData();

  return (
    <div>
      VEHICLE DETAILS...
      { vehicleDetails.id }
      { vehicleDetails.name }
    </div>
  );
}
