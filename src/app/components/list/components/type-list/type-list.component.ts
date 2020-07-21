import { Component, OnInit } from '@angular/core';
import {adMenus} from "../../../domain";


@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {

  showNum1:any = 10;

  type1:any = 1;

  constructor() { }

  ngOnInit(): void {
  }
  adMenu1: adMenus[] = [
    {
      id: 1,
      name:'正在直播1',
      img: 'https://advertest.oss-cn-shanghai.aliyuncs.com/img1.jpg',
      title: '',
      link: '',
      type:3,
      editor:'老王',
      num:1200
    },
    {
      id: 2,
      name:'正在直播2',
      img: 'https://advertest.oss-cn-shanghai.aliyuncs.com/img1.jpg',
      title: '',
      link: '',
      type:3,
      editor:'老王',
      num:1200
    },
    {
      id: 3,
      name:'正在直播3',
      img: 'https://advertest.oss-cn-shanghai.aliyuncs.com/img1.jpg',
      title: '',
      link: '',
      type:3,
      editor:'老王',
      num:1200
    },
    {
      id: 4,
      name:'正在直播4',
      img: 'https://advertest.oss-cn-shanghai.aliyuncs.com/img1.jpg',
      title: '',
      link: '',
      type:3,
      editor:'老王',
      num:1200
    },
  ];
}
