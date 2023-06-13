import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @ViewChild(IonModal)
  modal!: IonModal;
  public progress = 0;

  constructor(private loadingCtrl : LoadingController  ) { 
   setInterval(()=>{
    this.progress += 0.01;
    if(this.progress > 1){
       setTimeout(()=>{
         this.progress = 0;
       }, 1000);
    }

   }, 100);
  }

  ngOnInit() {
  }

cancel(){
  this.modal.dismiss(null,'cancel');
}

confirm(){
  this.modal.dismiss(null,'cancel');
}

 async showloading(){
   const loader = await  this.loadingCtrl.create({
    message:"Please wait....",
    duration:3000
   }) ;
   
   loader.present();
}
}
