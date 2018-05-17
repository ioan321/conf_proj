import { Pipe, PipeTransform } from '@angular/core';
import { CalEventOptions } from '../interfaces/cal-event-options';

@Pipe({
  name: 'calEventFilter',
  pure: false
})
export class CalEventPipe implements PipeTransform {

  transform(events: any[], filter: CalEventOptions): any {
    if (!events || !filter) {
      return events;
    }

    if (filter.room) {
      events = events.filter(event => event.room === filter.room);
    }

    if (filter.date) {
      events = events.filter(event => new Date(event.eventDate).toDateString() === new Date(filter.date).toDateString());
    }

    if (filter.empId || filter.empId === '') {
      events = events.filter(event => event.empId === filter.empId);
    }
    return events;
  }

}
