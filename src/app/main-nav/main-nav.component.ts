import { Component, OnInit, ViewChild, ViewChildren, Input } from '@angular/core';
import {MdSidenav} from "@angular/material";
import {LeadDataService} from "../lead-data.service";
import {LeadComponent} from "../lead/lead.component";
import {EventComponent} from "../event/event.component"

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  @ViewChild('rightnav') public rightnav: MdSidenav;
  @ViewChild('leftnav') public leftnav: MdSidenav;
  @ViewChildren(LeadComponent) public leads: LeadComponent;

  public current_lead: LeadComponent = null;
  public current_event: EventComponent = null;

  constructor(public leadData: LeadDataService) {
    console.log(this.rightnav)
  }

  ngOnInit() {
  }

  public toggleRightNav(event) {
    this.rightnav.toggle();
  }

  public toggleLeftNav(event) {
    this.leftnav.toggle();
  }

  public getLeads(){
    return this.leadData.getLeads()
  }

  public selectLead(lead_data){
    for (let lead of this.leads['_results']) {
      if(!(lead == lead_data)) {
        lead.selected = false;
      }
    }
    this.current_event = null;
    this.current_lead = lead_data;
    this.rightnav.open();
  }

  public selectEvent(event_data) {
    this.current_event = event_data;
  }

  public addEvent(event_data) {
    var data = event_data.data;
    data['lead'] = this.current_lead.data._id;
    this.leadData._event_POST(data);

    this.current_lead.pushEvent(data);
    this.current_event = event_data;
  }

  public createEvent() {
    this.current_event = null;
  }
}
