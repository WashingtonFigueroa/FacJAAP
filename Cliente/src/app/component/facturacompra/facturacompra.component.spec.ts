import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturacompraComponent } from './facturacompra.component';

describe('FacturacompraComponent', () => {
  let component: FacturacompraComponent;
  let fixture: ComponentFixture<FacturacompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturacompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturacompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
