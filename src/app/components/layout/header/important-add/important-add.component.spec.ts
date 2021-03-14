import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantAddComponent } from './important-add.component';

describe('ImportantAddComponent', () => {
  let component: ImportantAddComponent;
  let fixture: ComponentFixture<ImportantAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportantAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
