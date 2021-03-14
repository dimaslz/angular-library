import { TestBed } from '@angular/core/testing';

import { NgHeroiconsService } from './ng-heroicons.service';

describe('NgHeroiconsService', () => {
  let service: NgHeroiconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgHeroiconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
