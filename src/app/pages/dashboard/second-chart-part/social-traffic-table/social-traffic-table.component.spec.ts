import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialTrafficTableComponent } from './social-traffic-table.component';

describe('SocialTrafficTableComponent', () => {
  let component: SocialTrafficTableComponent;
  let fixture: ComponentFixture<SocialTrafficTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialTrafficTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialTrafficTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
