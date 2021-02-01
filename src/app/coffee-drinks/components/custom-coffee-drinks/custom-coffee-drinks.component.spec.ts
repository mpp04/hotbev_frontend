import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCoffeeDrinksComponent } from './custom-coffee-drinks.component';

describe('CustomCoffeeDrinksComponent', () => {
  let component: CustomCoffeeDrinksComponent;
  let fixture: ComponentFixture<CustomCoffeeDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCoffeeDrinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCoffeeDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
