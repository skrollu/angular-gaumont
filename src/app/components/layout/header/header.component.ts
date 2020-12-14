import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
