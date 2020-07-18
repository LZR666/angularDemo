import {Component, Input, OnInit} from '@angular/core';
import {adMenus} from "../../list-container.component";


@Component({
  selector: 'app-ad-card',
  templateUrl: './ad-card.component.html',
  styleUrls: ['./ad-card.component.less']
})
export class AdCardComponent implements OnInit {

  @Input() adMenu: adMenus[] = [];
  @Input() showNum = 0;
  @Input() type = [];

  constructor() { }

  ngOnInit(): void {
  }
  goDetail(num,id){
    if(num == 1){
      console.log(num);
      console.log(id);
    }else if(num == 2){
      console.log(num);
      console.log(id);
    }else if(num == 3){
      console.log(num);
      console.log(id);
    }else{
      console.log(num);
      console.log(id);
    }
  }
}
