import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private actionCtrl:ActionSheetController) { }

  ngOnInit() {
  }

async presentSheet(){
      const actionSheet = await this.actionCtrl.create({
       buttons:[
        {
          text:'contact',
          handler:()=>{
            alert("you have selected contact");
          }
        },
        {
          text:'Camera',
          handler:()=>{
            alert("you have selected camera");
          }
        },
        {
          text:'clock',
          handler:()=>{
            alert("you have selected clock");
          }
        }
       ],

      });
      actionSheet.present();
 }

}
