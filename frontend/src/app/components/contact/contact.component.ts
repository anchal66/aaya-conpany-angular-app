import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  success: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.success = true
    form.reset()
  }

}
