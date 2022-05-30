import { TestBed } from '@angular/core/testing';

import { PorflolioDataService } from './porflolio-data.service';

describe('PorflolioDataService', () => {
  let service: PorflolioDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PorflolioDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
