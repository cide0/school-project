import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnimalpageComponent} from "./animalpage/animalpage.component";
import {HomepageComponent} from "./homepage/homepage.component";

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'animal/:id',
    component: AnimalpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "reload", useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
