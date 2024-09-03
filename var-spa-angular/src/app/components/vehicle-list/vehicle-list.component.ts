import { Component, Input } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicle';
import { VehicleListFiltersComponent } from "../vehicle-list-filters/vehicle-list-filters.component";
import { VehicleListItemComponent } from '../vehicle-list-item/vehicle-list-item.component';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [
    VehicleListFiltersComponent,
    VehicleListItemComponent,
  ],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css'
})
export class VehicleListComponent {
  @Input() vehicleList!: Vehicle[];
}
