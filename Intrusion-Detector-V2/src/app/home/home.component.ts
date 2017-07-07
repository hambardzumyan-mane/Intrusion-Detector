import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  data = { 
    "username" : "",
    "password" : ""
  };
  formSubmit() {
    if("admin" == this.data.username  && "admin" == this.data.password) {
      console.log("YES");
    } else {
      console.log("NO");
    }
}
}
