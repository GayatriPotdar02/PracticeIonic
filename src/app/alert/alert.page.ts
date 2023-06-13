import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alrtctrl:AlertController) { }

  ngOnInit() {
  }

 async showAlert(){
    const alert = await this.alrtctrl.create({
      header:'you have selected seat no. 11',
      message:"based on your selection it will be proceed",
      buttons:['okey']
    });

    await alert.present();
  }

}
