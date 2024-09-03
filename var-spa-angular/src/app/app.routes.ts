import { Routes } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { VehicleDetailsViewComponent } from './views/vehicle-details-view/vehicle-details-view.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeViewComponent,
  },
  {
    path: "vehicles/:id",
    component: VehicleDetailsViewComponent,
  },
];
