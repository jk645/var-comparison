import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Vehicle } from '../../interfaces/vehicle';
import { VehicleService } from '../../services/vehicle.service';
import { VehicleDetailsComponent } from '../../components/vehicle-details/vehicle-details.component';

@Component({
  selector: 'app-vehicle-details-view',
  standalone: true,
  imports: [
    AsyncPipe,
    VehicleDetailsComponent,
  ],
  templateUrl: './vehicle-details-view.component.html',
  styleUrl: './vehicle-details-view.component.css'
})
export class VehicleDetailsViewComponent implements OnInit {
  vehicleDetails$!: Observable<Vehicle>;
  vehicleDetailsError!: HttpErrorResponse;

  constructor(
    private activatedRoute: ActivatedRoute,
    private vehicleService: VehicleService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const vehicleId = paramMap.get("id");
      if (!vehicleId) throw new Error("Param is missing in the route.");

      this.vehicleDetails$ = this.vehicleService.getVehicleDetails(vehicleId).pipe(
        catchError((error) => {
          this.vehicleDetailsError = error;
          throw error;
        })
      );
    });
  }
}
