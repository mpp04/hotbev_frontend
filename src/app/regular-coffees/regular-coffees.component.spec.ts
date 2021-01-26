import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularCoffeesComponent } from './regular-coffees.component';

describe('RegularCoffeesComponent', () => {
  let component: RegularCoffeesComponent;
  let fixture: ComponentFixture<RegularCoffeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularCoffeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularCoffeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
