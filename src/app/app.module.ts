import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes, ActivatedRoute } from '@angular/router';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuperTableComponent } from './super-table/super-table.component';
import { BookComponent } from './book/book.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalEventComponent } from './cal-event/cal-event.component';
import { CalEventListComponent } from './cal-event-list/cal-event-list.component';
import { EventDialogCreateComponent } from './event-dialog-create/event-dialog-create.component';

import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatDialogModule,
  MatInputModule
} from '@angular/material';
import { FloorMapComponent } from './floor-map/floor-map.component';
import { Floor21Component } from './components/floors/floor21/floor21.component';
import { Floor22Component } from './components/floors/floor22/floor22.component';
import { RoomDirective } from './directives/room.directive';

const routes: Routes = [
  { path: '', redirectTo: 'book', pathMatch: 'full' },
  { path: 'book', component: BookComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'floor-map', component: FloorMapComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    SuperTableComponent,
    BookComponent,
    CalendarComponent,
    CalEventComponent,
    CalEventListComponent,
    EventDialogCreateComponent,
    FloorMapComponent,
    Floor21Component,
    Floor22Component,
    RoomDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule,
    NgxMaterialTimepickerModule.forRoot()
  ],
  providers: [],
  entryComponents: [EventDialogCreateComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
