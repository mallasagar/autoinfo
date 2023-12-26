import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorderComponent } from './favorder.component';

describe('FavorderComponent', () => {
  let component: FavorderComponent;
  let fixture: ComponentFixture<FavorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavorderComponent]
    });
    fixture = TestBed.createComponent(FavorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
