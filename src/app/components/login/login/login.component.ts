import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  error: string;
  
  loginForm: FormGroup;

  constructor(private loginService: LoginService, private router: Router) { }
  
  ngOnInit(): void {
    this.loginForm =  new FormGroup({
      username: new FormControl(this.username, [
        Validators.required,
        //Validators.minLength(4),
        //forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
      password: new FormControl(this.password, [
        Validators.required
      ]),
    });
  }
  
  loginSubmit(){
    if(this.username != null && this.password != null) {
      this.loginService.login(this.username, this.password).subscribe( data => {
        
        if( (data as any).logged ){
          this.router.navigate(['/']);
        } else {
          console.log((data as any).error)
          this.error = (data as any).error.error.error;
        }
      });
    } else {
      //this.error = "Les champs doivent être remplis"
    }
  }
}
