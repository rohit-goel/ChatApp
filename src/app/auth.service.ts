import { Injectable } from '@angular/core';
import { Router } from '../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private routes:Router) { }

  canActivate() {   
    console.log(localStorage.getItem("Identity")!=null)
    if(localStorage.getItem("Identity")!=null){
  //    console.log("t",this.identity);
      return true;}
    else{
      console.log("false")
     this.routes.navigate(['/']) 
    return false;
  }
}
}
