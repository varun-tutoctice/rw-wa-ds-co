import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardsHeaderComponent } from './rewards-header.component';

describe('RewardsHeaderComponent', () => {
  let component: RewardsHeaderComponent;
  let fixture: ComponentFixture<RewardsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
