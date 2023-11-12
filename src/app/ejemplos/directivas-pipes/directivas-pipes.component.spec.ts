import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasPipesComponent } from './directivas-pipes.component';

describe('DirectivasPipesComponent', () => {
  let component: DirectivasPipesComponent;
  let fixture: ComponentFixture<DirectivasPipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivasPipesComponent]
    });
    fixture = TestBed.createComponent(DirectivasPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
