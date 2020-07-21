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

export interface adMenus {
  id: number;
  name: string;
  img: string;
  title: string;
  link: string;
  type:number;
  num: number;
  editor: string;
}

export interface tabItems {
  id: number;
  name: string;
}
