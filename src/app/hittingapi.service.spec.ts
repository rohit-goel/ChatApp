import { TestBed, inject } from '@angular/core/testing';

import { HittingapiService } from './hittingapi.service';

describe('HittingapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HittingapiService]
    });
  });

  it('should be created', inject([HittingapiService], (service: HittingapiService) => {
    expect(service).toBeTruthy();
  }));
});
