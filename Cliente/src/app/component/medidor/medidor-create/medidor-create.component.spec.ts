import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidorCreateComponent } from './medidor-create.component';

describe('MedidorCreateComponent', () => {
  let component: MedidorCreateComponent;
  let fixture: ComponentFixture<MedidorCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedidorCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedidorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
