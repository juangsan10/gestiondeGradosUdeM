import { TestBed } from '@angular/core/testing';

import { InformacionLaboralService } from './informacion-laboral.service';

describe('InformacionLaboralService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InformacionLaboralService = TestBed.get(InformacionLaboralService);
    expect(service).toBeTruthy();
  });
});
