import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefoodsComponent } from './updatefoods.component';

describe('UpdatefoodsComponent', () => {
  let component: UpdatefoodsComponent;
  let fixture: ComponentFixture<UpdatefoodsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatefoodsComponent]
    });
    fixture = TestBed.createComponent(UpdatefoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
