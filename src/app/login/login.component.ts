import { Component, OnInit } from '@angular/core';
import {
  AuthService,  GoogleLoginProvider
} from 'angular-6-social-login';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private socialAuthService: AuthService, private routes:Router) { }
  ngOnInit() {
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } 

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        
      }
    );
  }

}





