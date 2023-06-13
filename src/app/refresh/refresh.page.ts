import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.page.html',
  styleUrls: ['./refresh.page.scss'],
})
export class RefreshPage implements OnInit {
 items:any = [];
  constructor() { }

  ngOnInit() {
    for(let i=1; i<51; i++){
     this.items.push(`Item ${i}`);
    }
  }

   
}
