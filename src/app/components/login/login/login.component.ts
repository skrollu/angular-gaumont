import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/login/auth.service';
import { FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  error: string;
  
  loginForm: FormGroup;
  
  constructor(private authService: AuthService, private router: Router) { }
  
  ngOnInit(): void {
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
          this.authService.setUserInfo({'user' : data['user']});
          this.router.navigate(['/']);
          console.log(data)
        }
      });
    } else {
      //this.error = "Les champs doivent être remplis"
    }
  }
  
  facebook(){
    console.log("facebook");
    this.authService.facebook().subscribe( (result /*: MoviesResponse */) => {
      console.log("subscrieb " + result)
    })
  }
  
  twitter(){
    console.log("twitter")
  }
  
  google(){
    console.log("google")
  }
}
