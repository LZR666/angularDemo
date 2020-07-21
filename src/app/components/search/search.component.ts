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
      }else {
        alert('请输入搜索内容');
        return
      }
      this.searchText = '';
    }else{
      return
    }

    console.log(this.element.nativeElement.querySelector('#searchHistory').offsetHeight || 0);
  };
  clearHistory(){
    this.searchHistoryList = [];
  }
}
