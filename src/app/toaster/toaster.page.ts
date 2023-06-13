import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.page.html',
  styleUrls: ['./toaster.page.scss'],
})
export class ToasterPage implements OnInit {

  constructor(private toastctrl:ToastController) { }

  ngOnInit() {
  }

 async showToaster(){
  const toaster = await this.toastctrl.create({
    message:"This is Our Toaster.",
    duration:1500,
    position:"top"
  });
  await toaster.present();
 }
}
