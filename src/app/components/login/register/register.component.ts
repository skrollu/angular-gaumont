import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  email: string;
  password: string;
  error: string;
  
  constructor(private loginService: LoginService, private router: Router) { }
  
  ngOnInit(): void {
    this.username, this.email, this.password, this.error = null;
  }
  
  registerSubmit(){
    this.loginService.register(this.username, this.email, this.password).subscribe( data => {
      console.log(data)
      if( (data as any).registered ){
        this.router.navigate(['/login']);
      } else {
        this.error = (data as any).error;
      }
    });
  }
}
