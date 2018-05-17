import { Directive, HostListener } from '@angular/core';
import { EventDialogService } from '../services/event-dialog.service';

@Directive({
  selector: '[infyRoom]'
})
export class RoomDirective {

  constructor(
    private event: EventDialogService
  ) {
    // TODO Check if room is booked and change class to booked
  }

  @HostListener('click', ['$event'])
  createEvent(e) {
    this.event.openDialog(e.target.id);
  }
}
