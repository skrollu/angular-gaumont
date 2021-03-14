import { Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  animations: [
    // animation triggers go here
    trigger('openClose', [
      // ...
      state('open', style({
        zIndex: 5,
        height: '100vh',
        width: '500px',
        position: 'fixed',
        top: 0,
        transform: 'translateX(0px)',
        
      })),
      state('closed', style({
        zIndex: 5,
        height: '100%',
        width: '500px',
        position: 'fixed',
        top: 0,
        transform: 'translateX(-550px)',
        
      })),
      transition('open => closed', [
        animate('0.3s')
        
      ]),
      transition('closed => open', [
        animate('0.3s ease-in-out')
      ]),
    ])
  ],
})
export class HeaderComponent implements OnInit {
  isOpen: boolean = false;
  
  toggle() {
    this.isOpen = !this.isOpen;
  }
  
  constructor() { }
  
  ngOnInit(): void {
  }
}
