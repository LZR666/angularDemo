import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-search',
  templateUrl: './list-search.component.html',
  styleUrls: ['./list-search.component.less']
})
export class ListSearchComponent implements OnInit {

  get searchImg() {
    return `assets/img/search.png`
  }

  constructor() { }

  ngOnInit(): void {
  }

}
