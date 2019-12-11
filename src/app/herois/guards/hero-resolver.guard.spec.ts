import { TestBed, async, inject } from '@angular/core/testing';

import { HeroResolverGuard } from './hero-resolver.guard';

describe('HeroResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroResolverGuard]
    });
  });

  it('should ...', inject([HeroResolverGuard], (guard: HeroResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
