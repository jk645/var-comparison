import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleListFiltersComponent } from './vehicle-list-filters.component';

describe('VehicleListFiltersComponent', () => {
  let component: VehicleListFiltersComponent;
  let fixture: ComponentFixture<VehicleListFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleListFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleListFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
