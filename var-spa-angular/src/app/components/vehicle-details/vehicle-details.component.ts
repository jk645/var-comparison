import { Component, Input } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicle';

@Component({
  selector: 'app-vehicle-details',
  standalone: true,
  imports: [],
  templateUrl: './vehicle-details.component.html',
  styleUrl: './vehicle-details.component.css'
})
export class VehicleDetailsComponent {
  @Input() vehicleDetails!: Vehicle;
}
