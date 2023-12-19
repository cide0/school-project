import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {DashboardComponent} from "./homepage/dashboard/dashboard.component";
import { VoteButtonComponent } from './vote-button/vote-button.component';
import { AnimalpageComponent } from './animalpage/animalpage.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import { VotingpageComponent } from './votingpage/votingpage.component';
import { SheepPageComponent } from './sheep-page/sheep-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    DashboardComponent,
    VoteButtonComponent,
    AnimalpageComponent,
    VotingpageComponent,
    SheepPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
