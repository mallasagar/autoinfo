import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleorderComponent } from './singleorder.component';

describe('SingleorderComponent', () => {
  let component: SingleorderComponent;
  let fixture: ComponentFixture<SingleorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleorderComponent]
    });
    fixture = TestBed.createComponent(SingleorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
