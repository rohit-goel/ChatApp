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
    this.showmessage();
  }

  channels() {
    this.service.getChannel(this.addchannel).subscribe(res => {
      console.log(res);
      console.log("Channel created");
      this.groupObject = res.unique_name;
    },
      err => {
        console.log(err);
      });
  }
  channelarray = [];
  displaychannellist() {
    this.service.displaychannel().subscribe(res => {
      var length = res.channels.length;
      for (let indexnumber = 0; indexnumber < length; indexnumber++) {
        this.channelarray[indexnumber] = res.channels[indexnumber].unique_name;
      }
    },
      error => {
        console.log(error);
      })
  }

  searchchannel(){
    this.service.searchchannel().subscribe(res=>{
      for(let index=0;index<res.channels.length;index++){
           this.channelarray.push(res.channels[index].unique_name)
       this.arrayLen=this.channelarray.length;
      for(let index=0;index<this.arrayLen;index++){
        if(this.channelarray[index]==this.channel)
        {
          console.log("channel found");
          this.foundchannel=this.channel;
          this.foundChannelId=res.channels[index].sid;
          break;
        }
        else{
        this.foundchannel="channel not found";
        }
      }
    }
    },
  err=>{
    console.log();
  })
  }

  joinchannel(){
    this.service.joinchannel(this.foundChannelId).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }



  sendmessage(){
    this.service.sendmessage(this.messagetext).subscribe(res=>{
      console.log(this.messagetext);
      this.showmessage();
    },
  err=>{
    console.log(err);
  })
  // console.log("abc");
  }

  allMessages=[];

  showmessage(){
    this.service.showMessages().subscribe(res=>{
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
    this.routes.navigate(['home']);
  }
}