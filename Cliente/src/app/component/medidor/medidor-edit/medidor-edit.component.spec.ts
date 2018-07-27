import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidorEditComponent } from './medidor-edit.component';

describe('MedidorEditComponent', () => {
  let component: MedidorEditComponent;
  let fixture: ComponentFixture<MedidorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedidorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedidorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
