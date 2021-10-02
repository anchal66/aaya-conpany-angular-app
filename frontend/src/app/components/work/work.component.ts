import { Component, OnInit } from '@angular/core';
import { faDumpster, faExclamation, faRecycle, faShoppingBag, faSmoking, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  recycle = faRecycle;
  exclamation = faExclamation;
  umbrellaBeach = faUmbrellaBeach;
  shoppingBag = faShoppingBag;
  dumpster = faDumpster;
  smoking = faSmoking;

  constructor() { }

  ngOnInit(): void {
  }

}
