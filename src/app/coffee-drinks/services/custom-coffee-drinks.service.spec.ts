import { TestBed } from '@angular/core/testing';

import { CustomCoffeeDrinksService } from './custom-coffee-drinks.service';

describe('CustomCoffeeDrinksService', () => {
  let service: CustomCoffeeDrinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomCoffeeDrinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
