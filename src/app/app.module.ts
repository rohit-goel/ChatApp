import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from "angular-6-social-login";
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ChathomepageComponent } from './chathomepage/chathomepage.component'
import { HittingapiService } from './hittingapi.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';


export function getAuthServiceConfigs() {
  let configuration = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("290321320754-si7cu90qkndgtb2sjqfgs2t9ukgcdoo7.apps.googleusercontent.com")
      },
    ]
  );
  return configuration;
}


const routes: Routes = [
  {
    path: 'homepage',
    component: ChathomepageComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: LoginComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChathomepageComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HittingapiService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
