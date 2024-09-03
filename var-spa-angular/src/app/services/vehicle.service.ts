import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, retry } from 'rxjs';
import { Vehicle } from '../interfaces/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  constructor(
    private http: HttpClient,
  ) { }

  getVehicleList(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>("http://localhost:9000/assets").pipe(
      retry(2),
      catchError((error) => {
        console.log("Could try to refresh auth token, send error to logging service, etc.");
        throw error;  // Throw original error so it can be handled by the subscribing component too.
      })
    );
  }

  getVehicleDetails(vehicleId: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(`http://localhost:9000/assets/${vehicleId}`);
  }
}
