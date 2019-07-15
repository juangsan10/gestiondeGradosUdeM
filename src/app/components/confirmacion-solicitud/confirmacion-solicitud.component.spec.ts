import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionSolicitudComponent } from './confirmacion-solicitud.component';

describe('ConfirmacionSolicitudComponent', () => {
  let component: ConfirmacionSolicitudComponent;
  let fixture: ComponentFixture<ConfirmacionSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmacionSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
