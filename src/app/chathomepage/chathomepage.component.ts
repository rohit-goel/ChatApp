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
      this.groupObject
    },
      err => {
        console.log(err);
      });
  }
  channelarray = [];
  displaychannellist() {
    this.service.displaychannel().subscribe(res => {
      var len = res.channels.length;
      for (let indexnumber = 0; indexnumber < len; indexnumber++) {
        this.channelarray[indexnumber] = res.channels[indexnumber].unique_name;
      }
    },
      err => {
        console.log(err);
      })
  }

  sendmessage() {
    this.service.entermessage(this.messagetext).subscribe(res => {
      this.msggrp = res.body;
      console.log(this.msggrp);
    })
  }
}