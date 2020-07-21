import {Component, Input, OnInit} from '@angular/core';
import {adMenus} from "../../../domain";



@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.less']
})
export class ListItemComponent implements OnInit {

  itemType:string = '';

  // @ts-ignore
  @Input() adItem:{
    num: number;
    editor: string;
    img: string;
    name: string;
    type: number
  } = {

  };


  constructor() { }


  ngOnInit(): void {
    console.log(this.adItem);
    if(this.adItem.type == 1){
      this.itemType = '直播推荐';
    }else if(this.adItem.type == 2){
      this.itemType = '即将开播';
    }else if(this.adItem.type == 3){
      this.itemType = '精彩回放';
    }

  }

}
