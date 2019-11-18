import { TestBed } from '@angular/core/testing';

import { HeroisService } from './herois.service';

describe('HeroisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroisService = TestBed.get(HeroisService);
    expect(service).toBeTruthy();
  });
});
