import {Component, Input, OnInit} from '@angular/core';
import {AdCardComponent,} from './components/ad-card'

export interface adMenus {
  id: number;
  name: string;
  img: string;
  title: string;
  link: string;
}

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.less']
})
export class ListContainerComponent implements OnInit {
  showNum1:any = 3;
  showNum2:any = 2;
  showNum3:any = 1;

  type1:any = 1;
  type2:any = 2;
  type3:any = 3;

  adMenu1: adMenus[] = [
    {
      id: 1,
      name:'正在直播1',
      img: 'https://advertest.oss-cn-shanghai.aliyuncs.com/img1.jpg',
      title: '',
      link: '',
    },
    {
      id: 2,
      name:'正在直播2',
      img: 'https://advertest.oss-cn-shanghai.aliyuncs.com/img1.jpg',
      title: '',
      link: '',
    },
    {
      id: 3,
      name:'正在直播3',
      img: 'https://advertest.oss-cn-shanghai.aliyuncs.com/img1.jpg',
      title: '',
      link: '',
    },
    {
      id: 4,
      name:'正在直播4',
      img: 'https://advertest.oss-cn-shanghai.aliyuncs.com/img1.jpg',
      title: '',
      link: '',
    },
  ];
  adMenu2: adMenus[] = [
    {
      id: 1,
      name:'马上开播1',
      img: 'https://advertest.oss-cn-shanghai.aliyuncs.com/img1.jpg',
      title: '',
      link: '',
    },
    {
      id: 2,
      name:'马上开播2',
      img: 'https://advertest.oss-cn-shanghai.aliyuncs.com/img1.jpg',
      title: '',
      link: '',
    },
    {
      id: 3,
      name:'马上开播3',
      img: 'https://advertest.oss-cn-shanghai.aliyuncs.com/img1.jpg',
      title: '',
      link: '',
    },
  ];
  adMenu3: adMenus[] = [
    {
      id: 1,
      name:'精彩回放1',
      img: 'https://advertest.oss-cn-shanghai.aliyuncs.com/img1.jpg',
      title: '',
      link: '',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
