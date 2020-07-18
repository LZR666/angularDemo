import { Component, OnInit, Input } from '@angular/core';
import {ListContainerComponent} from "./components/list-container";
import {ListSearchComponent} from "./components/list-search";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

}
