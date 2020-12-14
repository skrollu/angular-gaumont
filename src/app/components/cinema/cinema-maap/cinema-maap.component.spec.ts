import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaMaapComponent } from './cinema-maap.component';

describe('CinemaMaapComponent', () => {
  let component: CinemaMaapComponent;
  let fixture: ComponentFixture<CinemaMaapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemaMaapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaMaapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
