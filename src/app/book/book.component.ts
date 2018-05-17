import { Component, OnInit } from '@angular/core';
import { EventDialogService} from '../event-dialog.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  room = 'Larry Bird';
  
  constructor(public eventDialog: EventDialogService) {}

  ngOnInit() {
  }

}
