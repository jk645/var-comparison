import { TestBed } from '@angular/core/testing';

import { VehicleListFiltersService } from './vehicle-list-filters.service';

describe('VehicleListFiltersService', () => {
  let service: VehicleListFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleListFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
