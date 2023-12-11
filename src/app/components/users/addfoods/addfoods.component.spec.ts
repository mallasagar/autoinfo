import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfoodsComponent } from './addfoods.component';

describe('AddfoodsComponent', () => {
  let component: AddfoodsComponent;
  let fixture: ComponentFixture<AddfoodsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddfoodsComponent]
    });
    fixture = TestBed.createComponent(AddfoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
