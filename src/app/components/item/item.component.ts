import { Component, OnInit } from '@angular/core';

export interface adItem{
  id: number;
  logo: string;
  name: string;
  time: string;
  img: string;
  title: string;
  link: string;
  editor:string;
  support:number;
  fire:number;
  content:string;
}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less']
})
export class ItemComponent implements OnInit {

  isNamed: boolean = true;

  get editorImg() {
    return `assets/img/editor.png`
  }

  changeSignStatus:boolean = false;
  allowClick:boolean = true;
  alertInfo:string = '';
  showAlert:boolean = false;

  adItem: adItem= {
    id: 1,
    logo: 'https://advertest.oss-cn-shanghai.aliyuncs.com/img1.jpg',
    name: 'xxxxx直播课',
    time: '2018-9-9',
    img: 'https://advertest.oss-cn-shanghai.aliyuncs.com/img1.jpg',
    title: 'aaaa',
    link: 'ssss',
    editor: 'xxx',
    support: 1213,
    fire:111,
    content:'sdasdsadsadsadsadsaas',
  }

  constructor() {
    this.alertInfo = '报名成功';
  }

  ngOnInit(): void {
  }

  changeStatus(){
    if(this.allowClick == false){
      return
    }else{
      if(this.changeSignStatus){
        this.alertInfo = '取消报名成功';
      }else{
        this.alertInfo = '报名成功';
      }
      this.changeSignStatus = !this.changeSignStatus;
      this.allowClick = false;
      this.showAlert = true;
      setTimeout(() => {
        this.allowClick = true;
        this.showAlert = false;
      }, 3000);
      console.log(this.changeSignStatus);
    }
  }

}
