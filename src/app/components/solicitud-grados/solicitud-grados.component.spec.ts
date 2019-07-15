import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudGradosComponent } from './solicitud-grados.component';

describe('SolicitudGradosComponent', () => {
  let component: SolicitudGradosComponent;
  let fixture: ComponentFixture<SolicitudGradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudGradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudGradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
