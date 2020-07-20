import {Component, Input, OnInit} from '@angular/core';
import {adMenus, tabItems} from "../../../domain";


@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.less']
})
export class ListContainerComponent implements OnInit {
  type:number = 1;

  tabSelect:number = 0;

  tabItems: tabItems[] = [
    {
      id:1,
      name:'直播推荐'
    },
    {
      id:2,
      name:'精彩回放'
    },
  ];

  toggleSelected(idx){
    this.tabSelect = idx;
    this.adMenus=[];
    if(idx == 0){
      this.adMenus = this.adMenu1;
    }else{
      this.adMenus = this.adMenu2;
    }
    idx++;
    this.type = idx;
  }


  adMenus:adMenus[] = [];

  adMenu1: adMenus[] = [
    {
      id: 1,
      name:'正在直播1',
      img: 'https://advertest.oss-cn-shanghai.aliyuncs.com/img1.jpg',
      title: '',
      link: '',
      type: 1,
    },
    {
      id: 2,
      name:'正在直播2',
      img: 'https://advertest.oss-cn-shanghai.aliyuncs.com/img1.jpg',
      title: '',
      link: '',
      type: 1,
    },
    {
      id: 3,
      name:'正在直播3',
      img: 'https://advertest.oss-cn-shanghai.aliyuncs.com/img1.jpg',
      title: '',
      link: '',
      type: 1,
    },
    {
      id: 4,
      name:'正在直播4',
      img: 'https://advertest.oss-cn-shanghai.aliyuncs.com/img1.jpg',
      title: '',
      link: '',
      type: 1,
    },
    {
      id: 1,
      name:'马上开播1',
      img: 'https://advertest.oss-cn-shanghai.aliyuncs.com/img1.jpg',
      title: '',
      link: '',
      type: 2,
    },
    {
      id: 2,
      name:'马上开播2',
      img: 'https://advertest.oss-cn-shanghai.aliyuncs.com/img1.jpg',
      title: '',
      link: '',
      type: 2,
    },
    {
      id: 3,
      name:'马上开播3',
      img: 'https://advertest.oss-cn-shanghai.aliyuncs.com/img1.jpg',
      title: '',
      link: '',
      type: 2,
    },
    {
      id: 2,
      name:'马上开播2',
      img: 'https://advertest.oss-cn-shanghai.aliyuncs.com/img1.jpg',
      title: '',
      link: '',
      type: 2,
    },
    {
      id: 3,
      name:'马上开播3',
      img: 'https://advertest.oss-cn-shanghai.aliyuncs.com/img1.jpg',
      title: '',
      link: '',
      type: 2,
    },
    {
      id: 2,
      name:'马上开播2',
      img: 'https://advertest.oss-cn-shanghai.aliyuncs.com/img1.jpg',
      title: '',
      link: '',
      type: 2,
    },
    {
      id: 3,
      name:'马上开播3',
      img: 'https://advertest.oss-cn-shanghai.aliyuncs.com/img1.jpg',
      title: '',
      link: '',
      type: 2,
    },
    {
      id: 2,
      name:'马上开播2',
      img: 'https://advertest.oss-cn-shanghai.aliyuncs.com/img1.jpg',
      title: '',
      link: '',
      type: 2,
    },
    {
      id: 3,
      name:'马上开播3',
      img: 'https://advertest.oss-cn-shanghai.aliyuncs.com/img1.jpg',
      title: '',
      link: '',
      type: 2,
    },
  ];
  adMenu2: adMenus[] = [
    {
      id: 1,
      name:'精彩回放1',
      img: 'https://advertest.oss-cn-shanghai.aliyuncs.com/img1.jpg',
      title: '',
      link: '',
      type: 3,
    },
    {
      id: 1,
      name:'精彩回放1',
      img: 'https://advertest.oss-cn-shanghai.aliyuncs.com/img1.jpg',
      title: '',
      link: '',
      type: 3,
    }
  ];

  constructor() {
    this.adMenus = this.adMenu1;
  }

  ngOnInit(): void {
  }

}
