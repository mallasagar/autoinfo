import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletefoodsComponent } from './deletefoods.component';

describe('DeletefoodsComponent', () => {
  let component: DeletefoodsComponent;
  let fixture: ComponentFixture<DeletefoodsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletefoodsComponent]
    });
    fixture = TestBed.createComponent(DeletefoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
