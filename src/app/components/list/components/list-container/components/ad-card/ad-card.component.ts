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

  goWhere:string = '';

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {

  }
  goDetail(num,id){
    debugger
    console.log(num);
    console.log(id);
    switch (num) {
      case 1:
        this.router.navigateByUrl('content');
        break;
      case 2:
        this.router.navigateByUrl('content');
        break;
      case 3:
        this.router.navigateByUrl('content');
        break;
    }

  }
}
