import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturacompraCrearComponent } from './facturacompra-crear.component';

describe('FacturacompraCrearComponent', () => {
  let component: FacturacompraCrearComponent;
  let fixture: ComponentFixture<FacturacompraCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturacompraCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturacompraCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
