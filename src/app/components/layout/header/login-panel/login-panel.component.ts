import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.sass']
})
export class LoginPanelComponent implements OnInit {
  logged: boolean = false;
  
  constructor(private loginService: LoginService) { }
  
  ngOnInit(): void {
  }
  
  logout() {
    this.loginService.logout().subscribe( data => {
      console.log(data)
    })
  }
}
