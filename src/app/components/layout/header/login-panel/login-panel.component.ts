import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.sass']
})
export class LoginPanelComponent implements OnInit {
  logged: boolean = false;
  
  constructor(private authService: AuthService, private router: Router) { }
  
  ngOnInit(): void {
  }
  
  logout() {
    this.authService.logout().subscribe(data => {
      console.log(data)
      this.authService.removeUserInfo();
      this.router.navigate(['/']);
    })
  }

  isAuthenticated(): Boolean {
    return this.authService.isAuthenticated()
  }
}
