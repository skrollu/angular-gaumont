import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardSliderComponent } from './movie-card-slider.component';

describe('MovieCardSliderComponent', () => {
  let component: MovieCardSliderComponent;
  let fixture: ComponentFixture<MovieCardSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCardSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
