import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/login/auth.service';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string;
  email: string;
  password: string;
  loginForm: FormGroup;

  socialUser: SocialUser;
  isLoggedin: boolean;

  constructor(private authService: AuthService, private router: Router, private socialAuthService: SocialAuthService) { }

  ngOnInit(): void {
    this.isLoggedin = false;
    this.loginForm =  new FormGroup({
      email: new FormControl(this.email, [
        Validators.required,
        //Validators.minLength(4),
        //forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
      password: new FormControl(this.password, [
        Validators.required
      ]),
    });
  }

  login(){
    if(this.email != null && this.password != null) {
      this.authService.login(this.email, this.password).subscribe(data => {
        if((data as any).error) {
          console.log((data as any).error)
          //this.error = (data as any).error.error.error;
        } else {
          this.authService.setUser({'user' : data['user']});
          this.router.navigate(['/']);
          console.log(data)
        }
      });
    } else {
      //this.error = "Les champs doivent être remplis"
    }
  }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(userData => {
      this.authService.setSocialUser({'socialUser': userData})
      this.router.navigate(['/']);
    }).catch(err => console.log(err));
  }

  signInWithFaceBook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(userData => {
      this.authService.setSocialUser({'socialUser': userData})
      this.router.navigate(['/']);
    }).catch(err => console.log(err));
  }

  signInWithTwitter(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(userData => {
      this.authService.setSocialUser({'socialUser': userData})
      this.router.navigate(['/']);
    }).catch(err => console.log(err));
  }
}
