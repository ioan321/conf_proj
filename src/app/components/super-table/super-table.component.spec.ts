
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperTableComponent } from './super-table.component';

describe('SuperTableComponent', () => {
  let component: SuperTableComponent;
  let fixture: ComponentFixture<SuperTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
