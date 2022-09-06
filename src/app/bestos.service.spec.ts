import { TestBed } from '@angular/core/testing';

import { BestosService } from './bestos.service';

describe('BestosService', () => {
  let service: BestosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
