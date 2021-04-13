import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/login/auth.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {
    console.log(this.router.url)
    console.log(this.activatedRoute.snapshot.url)
    console.log(this.activatedRoute.snapshot.url[2])
 /*    this.jwt.decodeToken(this.activatedRoute.snapshot.url[2], process.env.TOKEN_SECRET_KEY, (err, decoded) => {

    }) */
    console.log(this.router.url)
    //if(this.router.url === '/login/social')
  }

}
