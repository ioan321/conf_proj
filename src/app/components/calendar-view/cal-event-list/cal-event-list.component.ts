import { Component, OnInit, Input } from '@angular/core';
import { CalEventOptions } from 'src/app/interfaces/cal-event-options';

@Component({
  selector: 'infy-cal-event-list',
  templateUrl: './cal-event-list.component.html',
  styleUrls: ['./cal-event-list.component.scss']
})
export class CalEventListComponent implements OnInit {
  @Input() options: CalEventOptions;

  calEvents=[
    {
      id: 1,
      start: null,
      title: null,
      eventName: 'Infyroom Meeting',
      empId: '99',
      numberOfParticipants: 5,
      eventStart: '2018-05-10T14:45:54.973Z',
      eventEnd: '2018-05-10T16:35:04.142Z',
      eventDate: '2018-05-10T14:45:54.973Z',
      room: 'Larry Bird'
    },
    {
      id: 2,
      start: null,
      title: null,
      eventName: 'Infyroom Meeting',
      empId: '100001',
      numberOfParticipants: 5,
      eventStart: '2018-05-10T14:45:54.973Z',
      eventEnd: '2018-05-10T16:35:04.142Z',
      eventDate: '2018-05-10T14:45:54.973Z',
      room: 'Larry Bird'
    },
    {
      id: 3,
      start: null,
      title: null,
      eventName: 'Infyroom Meeting',
      empId: '100001',
      numberOfParticipants: 5,
      eventStart: '2018-05-10T14:45:54.973Z',
      eventEnd: '2018-05-10T16:35:04.142Z',
      eventDate: '2018-05-10T14:45:54.973Z',
      room: 'Larry Bird'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
