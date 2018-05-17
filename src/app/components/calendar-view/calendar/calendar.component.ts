import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EventDialogService} from '../../../services/event-dialog.service';
import { CalEventOptions } from 'src/app/interfaces/cal-event-options';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnInit {

  room = "Larry Bird";
  options: CalEventOptions = {
    room: "Larry Bird",
    date: new Date(),
    empId: null
  };

  constructor(public eventDialog: EventDialogService) {}

  ngOnInit() {
  }

  getChangedValue(e) {
    this.options.date = e.toISOString();
  }

}
