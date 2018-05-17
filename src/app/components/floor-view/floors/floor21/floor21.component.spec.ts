import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Floor21Component } from './floor21.component';

describe('Floor21Component', () => {
  let component: Floor21Component;
  let fixture: ComponentFixture<Floor21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Floor21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Floor21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
