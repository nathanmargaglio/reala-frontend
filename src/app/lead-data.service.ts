import { Injectable } from '@angular/core';

import {Http, Headers} from '@angular/http';

@Injectable()
export class LeadDataService {

  public _leads: any[] = [];
  public url = null;
  public headers = new Headers();

  constructor(private http:Http) {
    this.url = 'https://reala-a360.restdb.io/rest/';
    this.headers.append('x-apikey','593d95be4b84c62d01db8b13');

    this._lead_GET()
  }

  public _lead_GET() {
    this.http.get(this.url + 'lead', {headers: this.headers})
      .map(res => res.json())
      .subscribe(
        data => this._leads = data,
        err => console.error(err),
        () => console.log("Lead Get Complete!")
      )
  }

  public _event_GET(params) {
    console.log(this.url + 'event?q=' + params)
    return this.http.get(this.url + 'event?q=' + params, {headers: this.headers})
      .map(res => res.json())
  }

  public _event_POST(data) {
    this.http.post(this.url + 'event', data, {headers: this.headers})
      .map(res => res.json())
      .subscribe(
        data => console.log(data),
        err => console.error(err),
        () => console.log("Event Post Complete!")
      )
  }

  public getLeads(){
    return this._leads
  }

  public getEvents(){
    var events = [];
    this._event_GET('');
    //events.push(this.makeEvent())
    return events
  }

}
