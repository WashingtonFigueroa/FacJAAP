import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturacompraEditComponent } from './facturacompra-edit.component';

describe('FacturacompraEditComponent', () => {
  let component: FacturacompraEditComponent;
  let fixture: ComponentFixture<FacturacompraEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturacompraEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturacompraEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
