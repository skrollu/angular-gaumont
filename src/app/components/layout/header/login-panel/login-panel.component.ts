import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/login/auth.service';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.sass']
})
export class LoginPanelComponent implements OnInit {
  loggedSocial: boolean = false;
  logged: boolean = false;

  socialUser: SocialUser;
  user: any;

  constructor(private authService: AuthService,
     private router: Router,
     private socialAuthService: SocialAuthService
     ) { }

  ngOnInit(): void {
    this.user = this.authService.getUser()
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.loggedSocial = (user != null);
    });
  }

  logout() {
    console.log(this.authService.getUser())
    this.authService.logout().subscribe(data => {
      console.log(data)
      this.authService.removeUser();
      this.router.navigate(['/']);
    })
  }

  signOut(): void {
    this.socialAuthService.signOut().then(() => {
      console.log("Disconnected from social")
      this.authService.removeSocialUser();
    });
  }

  isAuthenticated(): Boolean {
    return this.authService.isAuthenticated()
  }
}
