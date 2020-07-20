import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from "./components/list";
import {ItemComponent} from "./components/item";
import {ContentComponent} from "./components/content";
import {SearchComponent} from "./components/search/search.component";

const  routes: Routes =[
  {path:'',component:ListComponent},
  {path:'item',component:ItemComponent},
  {path:'content',component:ContentComponent},
  {path:'search',component:SearchComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
