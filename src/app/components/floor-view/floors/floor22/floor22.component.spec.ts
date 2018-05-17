import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Floor22Component } from './floor22.component';

describe('Floor22Component', () => {
  let component: Floor22Component;
  let fixture: ComponentFixture<Floor22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Floor22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Floor22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
