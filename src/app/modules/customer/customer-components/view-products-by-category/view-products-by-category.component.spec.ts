import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductsByCategoryComponent } from './view-products-by-category.component';

describe('ViewProductsByCategoryComponent', () => {
  let component: ViewProductsByCategoryComponent;
  let fixture: ComponentFixture<ViewProductsByCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProductsByCategoryComponent]
    });
    fixture = TestBed.createComponent(ViewProductsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});