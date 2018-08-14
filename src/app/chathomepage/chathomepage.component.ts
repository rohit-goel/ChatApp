import { Component, OnInit } from '@angular/core';
import { HittingapiService } from '../hittingapi.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-chathomepage',
  templateUrl: './chathomepage.component.html',
  styleUrls: ['./chathomepage.component.css']
})
export class ChathomepageComponent implements OnInit {
  messageArray: any;

  constructor(private routes: Router, private service: HittingapiService) { }
  public addchannel = "";
  public messagetext :string;
  groupObject;
  channel:string="";
  foundchannel="";
  channelArray:any=[];
  foundChannelId="";
  arrayLen;
  ngOnInit() {
    this.displaychannellist();
    
  }

  channels() {
    this.service.getChannel(this.addchannel).subscribe(res => {
      console.log(res);
      console.log("Channel created");
      this.groupObject = res.unique_name;
      this.displaychannellist();
    },
      err => {
        console.log(err);
      });
  }
  channelarray;
  displaychannellist() {
    this.service.displaychannel().subscribe(res => {
      this.channelarray=res.channels;
    },
      error => {
        console.log(error);
      })
  }

  searchchannel(){
    this.service.searchchannel().subscribe(res=>{
      console.log(res.channels)
      res.channels.forEach(element => {
        if(element.unique_name == this.channel){
          this.foundchannel =element.unique_name;
        }
      });
      if(this.channel ==''){
        this.foundchannel="Channel Not Found"
      }
    }
      )
  }

  

  joinchannel(){
    this.service.joinchannel(this.foundchannel).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }



  sendmessage(){
    this.service.sendmessage(this.messagetext,this.url).subscribe(res=>{
      console.log(res)
      this.show(this.url)
    },
  err=>{
    console.log(err);
  })
  // console.log("abc");
  }

  allMessages=[];
  url;
  show(url){
    this.url=url;
    this.service.showMessages(url).subscribe(res=>{
      this.allMessages=res.messages;
      console.log(this.allMessages);
      var totalMessages= res.messages.length;
      for(let index=0;index<totalMessages;index++)
      {
        this.allMessages[index] = res.messages[index].body;
      }
    },
    err=>{
      console.log(err);
    })
  }
  
  logout() {
    localStorage.clear();
    this.routes.navigate(['home']);
  }
}