import { Component, OnInit } from '@angular/core';
import { HittingapiService } from '../hittingapi.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-chathomepage',
  templateUrl: './chathomepage.component.html',
  styleUrls: ['./chathomepage.component.css']
})
export class ChathomepageComponent implements OnInit {

  constructor(private routes: Router, private service: HittingapiService) { }
  public addchannel = "";
  public messagetext = "";
  groupObject;
  msggrp;
  ngOnInit() {
    this.displaychannellist();

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

  sendmessage() {
    this.service.entermessage(this.messagetext).subscribe(res => {
      this.msggrp = res.body;
      console.log(this.msggrp);
    })
  }

  messagelist = [];
  showMessages() {
    this.service.showmessage().subscribe(res => {
      length = res.sendmessage.length;
      for (let index = 0; index < length; index++) {
        this.messagelist[index] = res.sendmessage[index].body;
      }
    },
      error => {
        console.log(error);
      })
  }
}