import { TestBed } from '@angular/core/testing';

import { InformacionPersonalService } from './informacion-personal.service';

describe('InformacionPersonalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InformacionPersonalService = TestBed.get(InformacionPersonalService);
    expect(service).toBeTruthy();
  });
});
