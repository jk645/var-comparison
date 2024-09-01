import { Link } from "react-router-dom";
import { Vehicle } from "../interfaces/vehicle";

export default function VehicleListItem({ vehicle }: {vehicle: Vehicle}) {
  return (
    <div>
      <dl>
        <dt>ID</dt>
        <dd>{ vehicle.id }</dd>
        <dt>Driver</dt>
        <dd>{ vehicle.driver }</dd>
        <dt>Location</dt>
        <dd>Lat: { vehicle.location.lat }, Long: { vehicle.location.lng }</dd>
        <dt>Heading</dt>
        <dd>{ vehicle.heading }</dd>
        <dt>Speed</dt>
        <dd>{ vehicle.speed }</dd>
      </dl>
      <p>
        <Link to={`vehicles/${vehicle.id}`}>Details</Link>
      </p>
    </div>
  );
}
