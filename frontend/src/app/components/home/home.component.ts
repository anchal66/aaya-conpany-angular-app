import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isDesktop: boolean;

  images = [
    { path: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg', text1: '', text2: 'Set up more material recovery facilities and recycling facilities' },
    { path: 'https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270', text1: '', text2: 'Formalisation of informal markets, enabling better recovery of recyclable materials through traceable collection and recycling chains' },
    { path: 'https://media.istockphoto.com/photos/child-hands-formig-heart-shape-picture-id951945718?k=6&m=951945718&s=612x612&w=0&h=ih-N7RytxrTfhDyvyTQCA5q5xKoJToKSYgdsJ_mHrv0=', text1: '', text2: 'Engage with waste generators, bringing about behavioral changes like segregation at source' }
  ];

  facts = [
    { text: 'Just nine percent of all plastic waste ever produced globally has been recycled, according to the United Nations.', icon: 'bi bi-recycle' },
    { text: 'It is now widely accepted that microplastics enter our food—chain through multiple channels. Of course, from marine sources like seafood, but also things like honey, beer and bottled water. On average, people could be ingesting approximately 5 grams of plastic every week, equivalent to the weight of a credit card', icon: 'bi bi-wallet2' },
    { text: 'Plastic pollution in water con be found everywhere, from busy tourist beaches to uninhabited, tropical islands.', icon: 'bi bi-trash' },
    { text: 'Shoppers worldwide are using approximately 5OO billion single-use plastic bags per year.', icon: 'bi bi-bag' },
    { text: 'As of 2018, India generates  over 150,000 tonnes per day of  Municipal Solid Waste', icon: 'bi bi-trash' },
    { text: 'Cigarettes is the most littered waste in the world.', icon: 'bi bi-trash' },
  ]

  constructor() { }

  ngOnInit(): void {
    this.onResize();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.isDesktop = window.innerWidth > 990;
  }

}
