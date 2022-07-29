import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVisitesTableComponent } from './page-visites-table.component';

describe('PageVisitesTableComponent', () => {
  let component: PageVisitesTableComponent;
  let fixture: ComponentFixture<PageVisitesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageVisitesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageVisitesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
