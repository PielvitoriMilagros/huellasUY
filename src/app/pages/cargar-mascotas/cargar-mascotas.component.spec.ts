import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarMascotasComponent } from './cargar-mascotas.component';

describe('CargarMascotasComponent', () => {
  let component: CargarMascotasComponent;
  let fixture: ComponentFixture<CargarMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarMascotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
