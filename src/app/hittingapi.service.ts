import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class HittingapiService {

  url: string = "https://chat.twilio.com/v2/Services"

  constructor(private http: HttpClient) {

  }
  
  getData():Observable<any> {
    const body = new HttpParams().set('FriendlyName', 'Chat');
    return this.http.post(this.url, body.toString(), httpoptions)
  }
  }
  const httpoptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic QUMxZTU3YmMwMDZjNDExZGUyMjNjOTE1MDA0ZDQwZjg2Nzo1ZTM3YjczMTE2MzFjNjc3YmVjMDNlMDVjNTY0NDViMA=='
  })
}