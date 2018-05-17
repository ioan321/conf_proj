import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';

@Component({
  selector: 'app-floor-map',
  templateUrl: './floor-map.component.html',
  styleUrls: ['./floor-map.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FloorMapComponent implements OnInit {

  options = {
    floor: '21',
    capacity: 'All',
    functionality: 'All'
  };

  constructor() { }

  ngOnInit() {
  }

  updateFloor(value) {
    this.options.floor = value;
  }

  updateCapacity(value) {
    this.options.capacity = value;
  }

  updateFunctionality(value) {
    this.options.functionality = value;
  }
}
