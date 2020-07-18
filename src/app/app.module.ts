import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list';
import { AppRoutingModule } from './app-routing.module';
import { ListContainerComponent } from './components/list/components/list-container/list-container.component';
import { ListSearchComponent } from './components/list/components/list-search/list-search.component';
import { AdCardComponent } from './components/list/components/list-container/components/ad-card/ad-card.component';
import { ItemComponent } from './components/item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListContainerComponent,
    ListSearchComponent,
    AdCardComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
