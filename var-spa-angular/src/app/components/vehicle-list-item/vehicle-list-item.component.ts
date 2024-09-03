import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Vehicle } from '../../interfaces/vehicle';

@Component({
  selector: 'app-vehicle-list-item',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './vehicle-list-item.component.html',
  styleUrl: './vehicle-list-item.component.css'
})
export class VehicleListItemComponent {
  @Input() vehicle!: Vehicle;
}
