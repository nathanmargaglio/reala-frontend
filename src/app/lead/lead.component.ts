import {Component, OnInit, OnChanges, Input, Output, EventEmitter} from '@angular/core';
import {LeadDataService} from "../lead-data.service";

@Component({
  selector: 'lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent implements OnInit {
  public name: string;
  public selected: boolean = false;
  public events: any[] = null;

  @Input() data: any = {
    '_id':'',
    'name':'',
    'address':'',
    'city':'',
    'state':'',
    'phone':'',
    'email':''
  };

  @Output() leadFocus = new EventEmitter<LeadComponent>();

  constructor(public leadData: LeadDataService) { }

  ngOnInit() {
  }

  ngOnChanges(){
  }

  selectThis() {
    this.selected = true;
    this.loadEvents();
    this.leadFocus.emit(this);
  }

  pushEvent(event) {
    if (!this.events) {
      this.events = [];
    }
    this.events.unshift(event)
    return event
  }

  appendEvents(events) {
    this.events = []
    for (let e of events) {
      this.pushEvent(e)
    }
  }

  loadEvents() {
    var _id = this.data._id
    this.leadData._event_GET('{"lead":"' + _id + '"}')
    .subscribe(
        data => this.appendEvents(data),
        err => console.error(err),
        () => console.log("Event Get Complete!")
      )
  }

  getEvents(){
    return this.events
  }
}
