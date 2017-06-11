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
  public events: any[] = [];

  @Input() data: any = {
    'name':'',
    'address':'',
    'phone':'',
    'email':''
  };

  @Output() selectLead = new EventEmitter<LeadComponent>();

  constructor(public leadData: LeadDataService) { }

  ngOnInit() {
  }

  ngOnChanges(){
    console.log("Change!")
  }

  selectThis() {
    this.selected = true;
    this.loadEvents();
    this.selectLead.emit(this);
  }

  loadEvents() {
    for( let event of this.leadData.getEvents()){
      this.events.push(event);
    }
  }

  getEvents(){
    return this.events
  }

}
