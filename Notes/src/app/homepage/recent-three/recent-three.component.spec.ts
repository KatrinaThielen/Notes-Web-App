import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentThreeComponent } from './recent-three.component';

describe('RecentThreeComponent', () => {
  let component: RecentThreeComponent;
  let fixture: ComponentFixture<RecentThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentThreeComponent]
    });
    fixture = TestBed.createComponent(RecentThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
