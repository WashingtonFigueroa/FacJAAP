import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoIndexComponent } from './pago-index.component';

describe('PagoIndexComponent', () => {
  let component: PagoIndexComponent;
  let fixture: ComponentFixture<PagoIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
