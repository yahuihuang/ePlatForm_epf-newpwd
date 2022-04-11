import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Func1Component } from './func1.component';

describe('Func1Component', () => {
  let component: Func1Component;
  let fixture: ComponentFixture<Func1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Func1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Func1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
