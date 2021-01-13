import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaMaap2Component } from './cinema-maap2.component';

describe('CinemaMaap2Component', () => {
  let component: CinemaMaap2Component;
  let fixture: ComponentFixture<CinemaMaap2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemaMaap2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaMaap2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
