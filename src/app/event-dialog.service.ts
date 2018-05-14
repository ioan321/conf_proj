import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EventDialogCreateComponent } from 'src/app/event-dialog-create/event-dialog-create.component';

@Injectable({
  providedIn: 'root'
})
export class EventDialogService {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    let dialogRef = this.dialog.open(EventDialogCreateComponent, {
      width: '600px',
      data: {
        room: 'Larry Bird',
        name: '',
        empId: '',
        eStart: '',
        eEnd: '',
        eDate: '',
        numParticipants: 0
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // TODO process event creation
      console.log(result);
    })
  }
}
