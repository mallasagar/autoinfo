import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlayoutComponent } from './userlayout.component';

describe('UserlayoutComponent', () => {
  let component: UserlayoutComponent;
  let fixture: ComponentFixture<UserlayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserlayoutComponent]
    });
    fixture = TestBed.createComponent(UserlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
