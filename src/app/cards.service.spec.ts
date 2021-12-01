import { TestBed } from '@angular/core/testing';

import { ApisService } from './api.service';

describe('CardsService', () => {
  let service: ApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
