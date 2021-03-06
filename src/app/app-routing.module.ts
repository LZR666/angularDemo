import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from "./components/list";
import {ItemComponent} from "./components/item";
import {ContentComponent} from "./components/content";
import {SearchComponent} from "./components/search/search.component";

const  routes: Routes =[
  // 直播总列表
  {path:'',component:ListComponent,},
  // 预约报名
  {path:'item',component:ItemComponent},
  // 直播详情倒计时
  {path:'content',component:ContentComponent},
  // 搜索页面
  {path:'search',component:SearchComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
