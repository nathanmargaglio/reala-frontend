import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {DatePipe} from '@angular/common'
import {LeadDataService} from "../lead-data.service";

@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() data: any = {
    'datetime': null,
    'type':'',
    'details':'',
    'user':''
  };
  public current_datetime = new Date();

  @Output() eventFocus = new EventEmitter<EventComponent>();

  constructor(public leadService:LeadDataService, public pipe: DatePipe) {

  }

  ngOnInit() {

  }

  public onClick(){
    this.eventFocus.emit(this)
  }

  public getSimpleMessage() {
    var d = this.data;
    var message = d.user;

    if (d.type == 'other'){
      message += ' left a note'
    } else {
      message += ' ' + d.type + ' this lead'
    }

    return message
  }

  public getSimpleDatetime(){
    var d = this.data;
    var date = this.current_datetime;

    var diff = (date.getTime() - d.datetime.getTime())/ 1000 / 60; //in minutes

    if (diff < 1 ) {
      return "(>1m)"
    } else if (diff < 60 ) {
      return "(" + Math.floor(diff) + "m)"
    } else if (diff/60 < 24 ) {
      return "(" + Math.floor(diff/60) + 'h)'
    }

    return "(" + this.pipe.transform(d.datetime, 'MMM d') + ")"
  }
}

@Component({
  selector: 'event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event.component.css']
})
export class EventDetailComponent extends EventComponent {
  constructor(public leadService:LeadDataService, public pipe: DatePipe){
    super(leadService, pipe);
  }

  ngOnChange() {
    console.log("!!!")
  }
}
