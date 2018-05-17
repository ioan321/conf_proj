import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CalEventOptions } from 'src/app/interfaces/cal-event-options';
@Component({
  selector: 'app-employee-events',
  templateUrl: './employee-events.component.html',
  styleUrls: ['./employee-events.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeEventsComponent implements OnInit {

  options: CalEventOptions = {
    room: null,
    date: null,
    empId: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
