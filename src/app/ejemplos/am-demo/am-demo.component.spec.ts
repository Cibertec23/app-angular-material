import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmDemoComponent } from './am-demo.component';

describe('AmDemoComponent', () => {
  let component: AmDemoComponent;
  let fixture: ComponentFixture<AmDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmDemoComponent]
    });
    fixture = TestBed.createComponent(AmDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
