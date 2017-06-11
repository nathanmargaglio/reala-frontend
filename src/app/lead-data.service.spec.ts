import { TestBed, inject } from '@angular/core/testing';

import { LeadDataService } from './lead-data.service';

describe('LeadDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeadDataService]
    });
  });

  it('should be created', inject([LeadDataService], (service: LeadDataService) => {
    expect(service).toBeTruthy();
  }));
});
