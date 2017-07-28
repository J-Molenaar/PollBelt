import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { PollComponent } from './poll/poll.component';

import { FilterPipe } from './filter.pipe';
import { HttpService } from "./http.service";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DashboardComponent,
    CreateComponent,
    PollComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
