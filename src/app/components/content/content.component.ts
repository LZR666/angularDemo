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
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})
export class ContentComponent implements OnInit {

  get editorImg() {
    return `assets/img/editor.png`
  }

  isRegister:boolean = false;
  hour:number = 24;
  minute:number = 60;
  second:number = 60;
  date: any = '';

  constructor() {
    this.date = new Date();
    let a = typeof this.adItem.time;

    if(a == "string"){
      console.log(a);
      let dateOb = this.adItem.time.split('-');
      console.log(dateOb);
    }

  }

  ngOnInit(): void {
  }

  adItem: adItem= {
    id: 1,
    logo: 'https://advertest.oss-cn-shanghai.aliyuncs.com/img1.jpg',
    name: 'xxxxx直播课',
    time: '2018-9-9 10:30:00',
    img: 'https://advertest.oss-cn-shanghai.aliyuncs.com/img1.jpg',
    title: 'aaaa',
    link: 'ssss',
    editor: 'xxx',
    support: 1213,
    fire:111,
    content:'sdasdsadsadsadsadsaas',
  }

  changeStatus(){
    if(this.isRegister){
      this.registerCode();
    }else{
      this.goAd();
    }
  }

  registerCode(){

  }

  goAd(){

  }
}
