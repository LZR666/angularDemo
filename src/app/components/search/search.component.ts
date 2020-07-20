import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  get searchImg() {
    return `assets/img/search.png`
  }

  constructor() { }

  ngOnInit(): void {
  }

}
