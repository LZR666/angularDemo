import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from "./components/list";
import {ItemComponent} from "./components/item";
import {ContentComponent} from "./components/content";

const  routes: Routes =[
  {path:'',component:ListComponent},
  {path:'item',component:ItemComponent},
  {path:'content',component:ContentComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
