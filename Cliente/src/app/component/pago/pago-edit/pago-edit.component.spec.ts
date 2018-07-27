import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoEditComponent } from './pago-edit.component';

describe('PagoEditComponent', () => {
  let component: PagoEditComponent;
  let fixture: ComponentFixture<PagoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
