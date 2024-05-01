import { TestBed } from '@angular/core/testing';

import { GetStatisticService } from './get-statistic.service';

describe('GetStatisticService', () => {
  let service: GetStatisticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetStatisticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
