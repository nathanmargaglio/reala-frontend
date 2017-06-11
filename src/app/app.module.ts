import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DatePipe} from '@angular/common'

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LeadComponent } from './lead/lead.component';
import {LeadDataService} from "./lead-data.service";
import {EventComponent, EventDetailComponent} from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LeadComponent,
    EventComponent,
    EventDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    LeadDataService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
