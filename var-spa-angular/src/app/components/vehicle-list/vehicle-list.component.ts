import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicle';
import { VehicleListFiltersComponent } from "../vehicle-list-filters/vehicle-list-filters.component";
import { VehicleListItemComponent } from '../vehicle-list-item/vehicle-list-item.component';
import { VehicleListFiltersService } from '../../services/vehicle-list-filters.service';
import { VehicleListFiltersFormValue } from '../../interfaces/vehicle-list-filters-form-value';
import { Subscription } from 'rxjs';

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
export class VehicleListComponent implements OnInit, OnDestroy {
  @Input() vehicleList: Vehicle[] = [];

  formValueSubscription: Subscription|null = null;
  formValue: VehicleListFiltersFormValue|null = null;
  vehicleListFiltered: Vehicle[] = [];

  constructor(
    private vehicleListFiltersService: VehicleListFiltersService,
  ) {}

  ngOnInit(): void {
    this.vehicleListFiltered = this.vehicleList.concat();

    // Whenever filter values change, re-filter the list of vehicles.
    this.formValueSubscription = this.vehicleListFiltersService.formValue.subscribe((formValue) => {
      this.formValue = formValue;
      this.vehicleListFiltered = this.filterVehicles(this.vehicleList, this.formValue);
    });
  }

  ngOnDestroy(): void {
    if (this.formValueSubscription) {
      this.formValueSubscription.unsubscribe();
    }
  }

  filterVehicles(vehicleList: Vehicle[], formValue: VehicleListFiltersFormValue): Vehicle[] {
    return vehicleList  // Start with the vehicle list passed here
      .filter(v => v.driver.includes(formValue.filterText || ""))  // Apply text filter
      .filter(v => formValue.unassignedOnly ? !v.driver : true);  // Apply "unassigned only" filter
  }
}
