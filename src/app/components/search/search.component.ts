import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})

export class SearchComponent implements OnInit {

  searchText:string = '';
  searchTitle:string='搜索';

  searchHistoryList:any[] = [];

  get searchImg() {
    return `assets/img/search.png`
  }

  constructor(
    public element: ElementRef
  ) {
  }

  ngOnInit(): void {

  }

  search(e){
    let evt = window.event || e;
    if (evt.keyCode == 13) {
      if(this.searchText){
        let a = this.searchHistoryList.length;
        this.searchHistoryList[a] = this.searchText;
        this.searchText = '';
      }else {
        alert('请输入搜索内容');
        return
      }
    }else{
      return
    }
  };

  clickSearch(){
    if(this.searchText){
      let a = this.searchHistoryList.length;
      this.searchHistoryList[a] = this.searchText;
      this.searchText = '';
    }else {
      alert('请输入搜索内容');
      return
    }
  }

  clearHistory(){
    this.searchHistoryList = [];
  };
}
