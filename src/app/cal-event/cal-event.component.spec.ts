import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalEventComponent } from './cal-event.component';

describe('CalEventComponent', () => {
  let component: CalEventComponent;
  let fixture: ComponentFixture<CalEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
