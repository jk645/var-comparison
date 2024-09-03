import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Vehicle } from '../../interfaces/vehicle';
import { VehicleService } from '../../services/vehicle.service';
import { VehicleListComponent } from '../../components/vehicle-list/vehicle-list.component';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [
    AsyncPipe,
    VehicleListComponent,
  ],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css'
})
export class HomeViewComponent implements OnInit {
  vehicleList$!: Observable<Vehicle[]>;
  vehicleListError!: HttpErrorResponse;

  constructor(
    private vehicleService: VehicleService,
  ) {}

  ngOnInit(): void {
    this.vehicleList$ = this.vehicleService.getVehicleList().pipe(
      catchError((error) => {
        this.vehicleListError = error;
        throw error;
      })
    );
  }
}
