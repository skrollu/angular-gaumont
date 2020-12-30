import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
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
  styleUrls: ['./header.component.css'],
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
  logged: boolean = false;
  
  isOpen: boolean = false;
  
  toggle() {
    this.isOpen = !this.isOpen;
  }
  
  constructor(private loginService: LoginService) { }
  
  ngOnInit(): void {
  }
  
  logout() {
    this.loginService.logout().subscribe( data => {
      console.log(data)
    })
  }
  
}
