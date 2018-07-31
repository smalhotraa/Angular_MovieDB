import { TestBed, inject } from '@angular/core/testing';

import { FetchmoviedetailsService } from './fetchmoviedetails.service';

describe('FetchmoviedetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchmoviedetailsService]
    });
  });

  it('should be created', inject([FetchmoviedetailsService], (service: FetchmoviedetailsService) => {
    expect(service).toBeTruthy();
  }));
});
