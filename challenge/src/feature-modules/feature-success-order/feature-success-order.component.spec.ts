import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureSuccessOrderComponent } from './feature-success-order.component';

describe('FeatureSuccessOrderComponent', () => {
  let component: FeatureSuccessOrderComponent;
  let fixture: ComponentFixture<FeatureSuccessOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureSuccessOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureSuccessOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
