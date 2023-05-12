import { TestBed } from '@angular/core/testing';

import { HousingListService } from './housing-list.service';

describe('HousingListService', () => {
  let service: HousingListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HousingListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
