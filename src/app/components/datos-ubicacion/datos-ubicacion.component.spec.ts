import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosUbicacionComponent } from './datos-ubicacion.component';

describe('DatosUbicacionComponent', () => {
  let component: DatosUbicacionComponent;
  let fixture: ComponentFixture<DatosUbicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosUbicacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosUbicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
