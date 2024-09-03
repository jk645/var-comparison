import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { VehicleListFiltersFormValue } from '../interfaces/vehicle-list-filters-form-value';

@Injectable({
  providedIn: 'root'
})
export class VehicleListFiltersService {
  formValue = new ReplaySubject<VehicleListFiltersFormValue>(1);
}
