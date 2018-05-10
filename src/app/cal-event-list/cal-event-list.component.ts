import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'infy-cal-event-list',
  templateUrl: './cal-event-list.component.html',
  styleUrls: ['./cal-event-list.component.scss']
})
export class CalEventListComponent implements OnInit {

  calEvents=[
    {
      id: 1,
      start: null,
      title: null,
      eventName: 'Infyroom Meeting',
      employeeId: 100001,
      numberOfParticipants: 5,
      eventStart: '2018-05-10T14:45:54.973Z',
      eventEnd: '2018-05-10T16:35:04.142Z',
      room: 'Larry Bird'
    },
    {
      id: 2,
      start: null,
      title: null,
      eventName: 'Infyroom Meeting',
      employeeId: 100001,
      numberOfParticipants: 5,
      eventStart: '2018-05-10T14:45:54.973Z',
      eventEnd: '2018-05-10T16:35:04.142Z',
      room: 'Larry Bird'
    },
    {
      id: 3,
      start: null,
      title: null,
      eventName: 'Infyroom Meeting',
      employeeId: 100001,
      numberOfParticipants: 5,
      eventStart: '2018-05-10T14:45:54.973Z',
      eventEnd: '2018-05-10T16:35:04.142Z',
      room: 'Larry Bird'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
