import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturaEditComponent } from './lectura-edit.component';

describe('LecturaEditComponent', () => {
  let component: LecturaEditComponent;
  let fixture: ComponentFixture<LecturaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
