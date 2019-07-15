import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitosDocumentosComponent } from './requisitos-documentos.component';

describe('RequisitosDocumentosComponent', () => {
  let component: RequisitosDocumentosComponent;
  let fixture: ComponentFixture<RequisitosDocumentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisitosDocumentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitosDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
