import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnimalpageComponent} from "./animalpage/animalpage.component";
import {HomepageComponent} from "./homepage/homepage.component";
import { LivecampageComponent } from './livecampage/livecampage.component';
import {VotingpageComponent} from "./votingpage/votingpage.component";
import {SheepPageComponent} from "./sheep-page/sheep-page.component";

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
    path: 'sheep-page',
    component: SheepPageComponent
  },
  {
    path: 'voting',
    component: VotingpageComponent
  },
  {
    path: 'live-cam',
    component: LivecampageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "reload", useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
