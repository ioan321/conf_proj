import { Component, Input } from '@angular/core';

@Component({
  selector: 'infy-cal-event',
  templateUrl: './cal-event.component.html',
  styleUrls: ['./cal-event.component.scss']
})
export class CalEventComponent {
  @Input() calEvent;
}
