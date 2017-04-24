import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <p> Warning! You are in danger! </p>
    `,
  styles: [`
    p {
      background-color: #ff0000 ;
      color: #00000;
      padding: 12px;
    }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
