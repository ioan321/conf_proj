import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalEventListComponent } from './cal-event-list.component';

describe('CalEventListComponent', () => {
  let component: CalEventListComponent;
  let fixture: ComponentFixture<CalEventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalEventListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
