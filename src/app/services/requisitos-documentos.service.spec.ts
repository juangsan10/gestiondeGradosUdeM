import { TestBed } from '@angular/core/testing';

import { RequisitosDocumentosService } from './requisitos-documentos.service';

describe('RequisitosDocumentosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequisitosDocumentosService = TestBed.get(RequisitosDocumentosService);
    expect(service).toBeTruthy();
  });
});
