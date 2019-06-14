import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  isBlue: boolean = true;
  show: boolean = true;
  constructor() {}

  ngOnInit() {}

  toggleColor() {
    this.isBlue = !this.isBlue;
  }
  toggleVisibility() {
    this.show = !this.show;
  }
}
