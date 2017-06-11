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

  @ViewChild('sidenav') public sidenav: MdSidenav;
  @ViewChild('extranav') public extranav: MdSidenav;
  @ViewChildren(LeadComponent) public leads: LeadComponent;

  public current_lead: LeadComponent = null;
  public current_event: EventComponent = null;

  public sidenav_button_icon: string;

  constructor(public leadData: LeadDataService) {
    this.sidenav_button_icon = "chevron_right";
  }

  ngOnInit() {
  }

  public toggleSideNav(event) {
    this.sidenav.toggle();
  }

  public toggleExtraNav(event) {
    this.extranav.toggle();
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
    this.current_lead = lead_data;
    this.sidenav.open();
  }

  public selectEvent(event_data) {
    this.current_event = event_data;
  }
}
