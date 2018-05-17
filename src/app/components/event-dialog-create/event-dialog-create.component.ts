import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-event-dialog-create',
  templateUrl: './event-dialog-create.component.html',
  styleUrls: ['./event-dialog-create.component.scss']
})
export class EventDialogCreateComponent implements OnInit {

  am_pm = ['AM', 'PM'];

  constructor(
    public dialogRef: MatDialogRef<EventDialogCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  verifyTime(e) {
    let time = e.split(/[\: ]+/);
    time[0] = +time[0];
    time[1] = +time[1];

    if (time[1] >= 8 && time[1] < 23) {
      time[1] = '15';
    }
    else if (time[1] >= 23 && time[1] < 37) {
      time[1] = '30';
    }
    else if (time[1] >= 37 && time[1] < 53) {
      time[1] = '45';
    }
    else {
      if (time[1] >=53) {
        time[2] = (time[0] + 1) == 12 && time[2] == this.am_pm[0] ? this.am_pm[1] : this.am_pm[0];
        time[0] = (time[0] + 1) <= 12 ? time[0] + 1 : 1;
      }
      time[1] = '00';
    }

    return time[0] + ":" + time[1] + " " + time[2];
  }

  checkStartTime(e) {
    this.data.eStart = this.verifyTime(e);
  }

  checkEndTime(e) {
    this.data.eEnd = this.verifyTime(e);
  }

}
