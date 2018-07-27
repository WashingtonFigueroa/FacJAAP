import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametroIndexComponent } from './parametro-index.component';

describe('ParametroIndexComponent', () => {
  let component: ParametroIndexComponent;
  let fixture: ComponentFixture<ParametroIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametroIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametroIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
