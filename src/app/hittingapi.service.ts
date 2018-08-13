import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HittingapiService {

  url: string = "https://chat.twilio.com/v2/Services"
  serviceid: string = "IS59328796da90478a9b6933c90a981f87";
  mychannelid:string="CH05314576978b4f7c8fa6f71aca404630";
  identity:string=localStorage.getItem("Identity");
  
  channel: string = "https://chat.twilio.com/v2/Services/IS59328796da90478a9b6933c90a981f87/Channels"

  message: string = "https://chat.twilio.com/v2/Services/IS59328796da90478a9b6933c90a981f87/Channels/CH05314576978b4f7c8fa6f71aca404630/Messages"
  constructor(private http: HttpClient) {

  }
  getData(): Observable<any> {
    const body = new HttpParams().set('FriendlyName', 'Rohit');
    return this.http.post(this.url, body.toString(), httpoptions)
  }
  getChannel(mychannel): Observable<any> {
    return this.http.post(this.channel, 'UniqueName=' + mychannel, httpoptions);
  }
  displaychannel(): Observable<any> {
    return this.http.get(this.channel, httpoptions).pipe(map(data => data));
  }
  searchchannel():Observable<any>{
    return  this.http.get(this.channel,httpoptions).pipe(map(data=>data));
  }
  joinchannel(channelId):Observable<any>{
    return this.http.post(this.channel+"/"+channelId+"/Members","ChannelSid="+channelId+"&Identity="+this.identity+"&ServiceSid="+this.serviceid,httpoptions); 
  }
  sendmessage(messagetext):Observable<any>{
    return this.http.post(this.channel+"/"+this.mychannelid+"/Messages","ChannelSid="+this.mychannelid+"&ServiceSid="+this.serviceid+"&Body="+messagetext+"&From="+this.identity,httpoptions); 
  }
  showMessages():Observable<any>{
    return this.http.get(this.channel+"/"+this.mychannelid+"/Messages",httpoptions).pipe(map(data=>data));
  }
}
const httpoptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic QUMxZTU3YmMwMDZjNDExZGUyMjNjOTE1MDA0ZDQwZjg2Nzo1ZTM3YjczMTE2MzFjNjc3YmVjMDNlMDVjNTY0NDViMA=='
  })
};