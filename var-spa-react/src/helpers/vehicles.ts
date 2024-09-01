import { Vehicle } from "../interfaces/vehicle";

export async function getVehicleList(): Promise<Vehicle[]> {
  const response = await fetch("http://localhost:9000/assets");
  if (!response.ok) {
    throw new Error(`Response code: ${response.status} (${response.statusText})`);
  }
  return await response.json();
}

export async function getVehicleDetails(vehicleId: string): Promise<Vehicle> {
  const response = await fetch(`http://localhost:9000/assets/${vehicleId}`);
  if (!response.ok) {
    throw new Error(`Response code: ${response.status} (${response.statusText})`);
  }
  return await response.json();
}
