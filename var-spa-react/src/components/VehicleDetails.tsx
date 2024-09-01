import { Vehicle } from "../interfaces/vehicle";

export default function VehicleDetails({ vehicleDetails }: {vehicleDetails: Vehicle}) {
  return (
    <dl>
      <dt>ID</dt>
      <dd>{ vehicleDetails.id }</dd>
      <dt>Driver</dt>
      <dd>{ vehicleDetails.driver }</dd>
      <dt>Location</dt>
      <dd>Lat: { vehicleDetails.location.lat }, Long: { vehicleDetails.location.lng }</dd>
      <dt>Heading</dt>
      <dd>{ vehicleDetails.heading }</dd>
      <dt>Speed</dt>
      <dd>{ vehicleDetails.speed }</dd>
    </dl>
  );
}