export interface Vehicle {
  id: string;
  location: VehicleLocation;
  heading: number;
  speed: number;
}

export interface VehicleLocation {
  lng: number;
  lat: number;
}
