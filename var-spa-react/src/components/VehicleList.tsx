import { Link } from "react-router-dom";

export default function VehicleList() {
  return (
    <>
      <ul>
        <li><Link to={`vehicles/${123}`}>123</Link></li>
        <li><Link to={`vehicles/${456}`}>456</Link></li>
        <li><Link to={`vehicles/${789}`}>789</Link></li>
      </ul>
    </>
  );
}
