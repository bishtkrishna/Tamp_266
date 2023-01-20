import { Component, OnInit } from '@angular/core';
import { nielsenNavList, mediaNavList } from './sideNav.data'


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  nielsenList= nielsenNavList;
  mediaList = mediaNavList;

  collapsed = false;
  clicked:string;

  constructor() { }

  ngOnInit(): void {
  }
  ChangeSideView(){ 
    this.collapsed= !this.collapsed;
  }
  changeActiveLink(link:string){ 
    console.log(link)
    this.clicked===link;
    console.log(this.clicked)
  }

}
