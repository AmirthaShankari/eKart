import { TestBed } from '@angular/core/testing';

import { ProductsListService } from './products-list.service';

describe('ProductsListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsListService = TestBed.get(ProductsListService);
    expect(service).toBeTruthy();
  });
});
