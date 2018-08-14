import { Component, OnInit } from '@angular/core';
import {
  AuthService,  GoogleLoginProvider
} from 'angular-6-social-login';
import { Router } from '@angular/router';
import { HittingapiService } from '../hittingapi.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private socialAuthService: AuthService, private routes:Router,private service:HittingapiService) { }
  ngOnInit() {
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } 

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        var serve = this.service.getData();
        localStorage.setItem("username",userData.name)
        localStorage.setItem("emailid",userData.email);
        serve.subscribe(data=>console.log(data));
        this.routes.navigate(['/homepage']);
      }
    );
    
  }

}





