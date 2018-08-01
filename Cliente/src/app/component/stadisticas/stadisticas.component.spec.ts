import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StadisticasComponent } from './stadisticas.component';

describe('StadisticasComponent', () => {
  let component: StadisticasComponent;
  let fixture: ComponentFixture<StadisticasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StadisticasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StadisticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
