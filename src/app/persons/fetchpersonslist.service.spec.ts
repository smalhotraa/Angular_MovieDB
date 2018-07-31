import { TestBed, inject } from '@angular/core/testing';

import { FetchpersonslistService } from './fetchpersonslist.service';

describe('FetchpersonslistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchpersonslistService]
    });
  });

  it('should be created', inject([FetchpersonslistService], (service: FetchpersonslistService) => {
    expect(service).toBeTruthy();
  }));
});
