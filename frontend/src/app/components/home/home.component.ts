import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [
    {path: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',text1: 'Hello', text2: 'Desciption'},
    {path: 'https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270',text1: 'Welcome', text2: 'Desciption'},
    {path: 'https://media.istockphoto.com/photos/child-hands-formig-heart-shape-picture-id951945718?k=6&m=951945718&s=612x612&w=0&h=ih-N7RytxrTfhDyvyTQCA5q5xKoJToKSYgdsJ_mHrv0=',text1: 'Idiot', text2: 'Desciption'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
