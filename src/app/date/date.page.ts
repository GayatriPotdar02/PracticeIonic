import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.page.html',
  styleUrls: ['./date.page.scss'],
})
export class DatePage implements OnInit {

  constructor() { }
  
  highlightedDates = [{
    date:"2023-04-12",
    backgroundColor:'#ffc0cb'
  },
  {
    date:"2023-04-16",
    backgroundColor:'#c8e5d0'
  },
  {
    date:"2023-04-20",
    backgroundColor:'#00000'
  }]
  ngOnInit() {
  }

}
