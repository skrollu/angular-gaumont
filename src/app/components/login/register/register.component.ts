import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/login/auth.service';

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
  
  constructor(private authService: AuthService, private router: Router) { }
  
  ngOnInit(): void {
    this.username, this.email, this.password, this.error = null;
  }
  
  registerSubmit(){
    this.authService.register(this.email, this.password).subscribe( data => {
      console.log(data)
      if( (data as any).error ){
        this.error = (data as any).error;
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
}
