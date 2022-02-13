import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showMenu = false;
  isDesktop: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.isDesktop = window.innerWidth > 990;
  }

  menuClick(){
    this.showMenu = !this.showMenu;
  }

}
