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
    var dt = new Date(d.datetime)
    var date = this.current_datetime;

    var diff = (date.getTime() - dt.getTime())/ 1000 / 60; //in minutes

    if (diff < 1 ) {
      return "(>1m)"
    } else if (diff < 60 ) {
      return "(" + Math.floor(diff) + "m)"
    } else if (diff/60 < 24 ) {
      return "(" + Math.floor(diff/60) + 'h)'
    }

    return "(" + this.pipe.transform(dt, 'MMM d') + ")"
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
  }
}

@Component({
  selector: 'event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event.component.css']
})
export class EventFormComponent extends EventComponent {

  public input_type = null;
  public input_details = null;

  public type_options = [
    {value: 'claimed', viewValue: 'Claimed'},
    {value: 'called', viewValue: 'Called'},
    {value: 'mailed', viewValue: 'Mailed'},
    {value: 'emailed', viewValue: 'Emailed'},
    {value: 'other', viewValue: 'Other'},
  ]

  constructor(public leadService:LeadDataService, public pipe: DatePipe){
    super(leadService, pipe);
  }

  ngOnChange() {
  }

  public submitForm() {
    this.data = {
      'datetime': new Date(),
      'type':this.input_type,
      'details':this.input_details,
      'user':'User'
    };

    this.eventFocus.emit(this)
  }
}
