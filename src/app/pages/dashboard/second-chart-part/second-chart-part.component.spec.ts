import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondChartPartComponent } from './second-chart-part.component';

describe('SecondChartPartComponent', () => {
  let component: SecondChartPartComponent;
  let fixture: ComponentFixture<SecondChartPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondChartPartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondChartPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
