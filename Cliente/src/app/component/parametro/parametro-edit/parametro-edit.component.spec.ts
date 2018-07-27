import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametroEditComponent } from './parametro-edit.component';

describe('ParametroEditComponent', () => {
  let component: ParametroEditComponent;
  let fixture: ComponentFixture<ParametroEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametroEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametroEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
