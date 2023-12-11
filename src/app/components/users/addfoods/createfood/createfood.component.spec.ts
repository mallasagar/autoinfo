import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatefoodComponent } from './createfood.component';

describe('CreatefoodComponent', () => {
  let component: CreatefoodComponent;
  let fixture: ComponentFixture<CreatefoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatefoodComponent]
    });
    fixture = TestBed.createComponent(CreatefoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
