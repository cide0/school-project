import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {DashboardComponent} from "./homepage/dashboard/dashboard.component";
import { VoteButtonComponent } from './homepage/vote-button/vote-button.component';
import { AnimalpageComponent } from './animalpage/animalpage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    DashboardComponent,
    VoteButtonComponent,
    AnimalpageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
