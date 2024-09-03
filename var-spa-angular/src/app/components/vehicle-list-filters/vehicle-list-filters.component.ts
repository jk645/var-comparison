import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from "@angular/forms";
import { VehicleListFiltersService } from '../../services/vehicle-list-filters.service';
import { VehicleListFiltersFormValue } from '../../interfaces/vehicle-list-filters-form-value';

@Component({
  selector: 'app-vehicle-list-filters',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './vehicle-list-filters.component.html',
  styleUrl: './vehicle-list-filters.component.css'
})
export class VehicleListFiltersComponent implements OnInit {
  // NOTE: It's also possible to simply use output emit to share form value with parent, triggering filtering.
  // Wouldn't need the VehicleListFiltersService in that case. But then it wouldn't remember the state of the form
  // after navigating to the details view and back to the list view. A service stores that state and also can share
  // it between any components as needed, not only parent-child components. It's similar to how Redux is helping
  // out in the React version of this app.

  form = new FormGroup({
    filterText: new FormControl<string>(""),
    unassignedOnly: new FormControl<boolean>(false),
  });

  constructor(
    private vehicleListFiltersService: VehicleListFiltersService,
  ) {}

  ngOnInit(): void {
    // First get any initial value that might exist.
    const subscription = this.vehicleListFiltersService.formValue.subscribe((formValue) => {
      this.form.setValue(formValue, {emitEvent: false});
    });
    subscription.unsubscribe();

    // After that, this component becomes the source of truth. Keep the service updated.
    this.form.valueChanges.subscribe((newValue) => {
      this.vehicleListFiltersService.formValue.next(newValue as VehicleListFiltersFormValue);
    });
  }
}
