import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnimalpageComponent} from "./animalpage/animalpage.component";
import {HomepageComponent} from "./homepage/homepage.component";
import { LivecampageComponent } from './livecampage/livecampage.component';
import {VotingpageComponent} from "./votingpage/votingpage.component";
import {LoginpageComponent} from "./loginpage/loginpage.component";

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'animal/:id',
    component: AnimalpageComponent
  },
  {
    path: 'voting',
    component: VotingpageComponent
  },
  {
    path: 'live-cam',
    component: LivecampageComponent
  },
  {
    path: 'admin-login',
    component: LoginpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "reload", useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
