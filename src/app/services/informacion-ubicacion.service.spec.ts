import { TestBed } from '@angular/core/testing';

import { InformacionUbicacionService } from './informacion-ubicacion.service';

describe('InformacionUbicacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InformacionUbicacionService = TestBed.get(InformacionUbicacionService);
    expect(service).toBeTruthy();
  });
});
