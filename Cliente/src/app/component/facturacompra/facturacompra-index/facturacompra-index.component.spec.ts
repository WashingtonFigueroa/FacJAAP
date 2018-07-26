import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturacompraIndexComponent } from './facturacompra-index.component';

describe('FacturacompraIndexComponent', () => {
  let component: FacturacompraIndexComponent;
  let fixture: ComponentFixture<FacturacompraIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturacompraIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturacompraIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
