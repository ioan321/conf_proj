import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EventDialogService} from '../event-dialog.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnInit {

  constructor(public eventDialog: EventDialogService) {}

  ngOnInit() {
  }

  getChangedValue(e) {
    console.log(e);
  }

  room = "Larry Bird";
}
