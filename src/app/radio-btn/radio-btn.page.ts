import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-btn',
  templateUrl: './radio-btn.page.html',
  styleUrls: ['./radio-btn.page.scss'],
})
export class RadioBtnPage implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }

  pinFormatter(value:number){
    return `${value}%`;
  }

  runRefresh(event : any){
     setTimeout(()=>{event.target.complete();}, 2000);
  }
}
