import { TestBed, inject } from '@angular/core/testing';

import { FetchmoviesService } from './fetchmovies.service';

describe('FetchmoviesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchmoviesService]
    });
  });

  it('should be created', inject([FetchmoviesService], (service: FetchmoviesService) => {
    expect(service).toBeTruthy();
  }));
});
