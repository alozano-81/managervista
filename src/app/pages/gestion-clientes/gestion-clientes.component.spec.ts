import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionClientesComponent } from './gestion-clientes.component';

describe('GestionClientesComponent', () => {
  let component: GestionClientesComponent;
  let fixture: ComponentFixture<GestionClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionClientesComponent]
    });
    fixture = TestBed.createComponent(GestionClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
