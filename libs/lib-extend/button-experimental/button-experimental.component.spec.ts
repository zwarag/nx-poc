import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonExperimentalComponent } from './button-experimental.component';

describe('ButtonExperimentalComponent', () => {
  let component: ButtonExperimentalComponent;
  let fixture: ComponentFixture<ButtonExperimentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonExperimentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonExperimentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
