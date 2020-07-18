import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from "./components/list";
import {ItemComponent} from "./components/item";

const  routes: Routes =[
  {path:'',component:ListComponent},
  {path:'item',component:ItemComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
