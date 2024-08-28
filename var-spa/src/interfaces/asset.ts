export interface Asset {
  id: string;
  location: AssetLocation;
  heading: number;
  speed: number;
}

export interface AssetLocation {
  lng: number;
  lat: number;
}
