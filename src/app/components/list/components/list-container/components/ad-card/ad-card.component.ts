import {Component, Input, OnInit} from '@angular/core';
import {adMenus} from "../../../../../domain";
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-ad-card',
  templateUrl: './ad-card.component.html',
  styleUrls: ['./ad-card.component.less']
})
export class AdCardComponent implements OnInit {

  @Input() adMenu: adMenus[] = [];
  @Input() showNum = 0;
  @Input() type = [];

  adItem_type:string = '';

  constructor(
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    if(this.adMenu[0].type == 1){
      console.log('1');
    }else if(this.adMenu[0].type == 2){
      console.log('2');
    }else if(this.adMenu[0].type == 3){
      console.log('3');
    }else{
      console.log('4');
    }
  }
  goDetail(num,id){
    switch (num) {
      case 1:
        this.router.navigateByUrl('/item');
        break;
      case 2:
        this.router.navigateByUrl('/item');
        break;
      case 3:
        this.router.navigateByUrl('/item');
        break;
    }

  }
}
