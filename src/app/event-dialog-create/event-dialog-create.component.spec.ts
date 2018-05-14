import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDialogCreateComponent } from './event-dialog-create.component';

describe('EventDialogCreateComponent', () => {
  let component: EventDialogCreateComponent;
  let fixture: ComponentFixture<EventDialogCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDialogCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDialogCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
