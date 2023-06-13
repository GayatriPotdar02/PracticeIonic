import { Component, OnInit } from '@angular/core';
import { WebView } from '@awesome-cordova-plugins/ionic-webview/ngx';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.page.html',
  styleUrls: ['./image-picker.page.scss'],
})
export class ImagePickerPage implements OnInit {
  photo: any;

  constructor(private webView: WebView, private alertCtrl:AlertController,private camera:Camera

  ) { }

  cameraOptions: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true,
  };

  galleryOptions: CameraOptions = {
    quality: 100,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true,
  };

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Choose photo from',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'Camera',
          handler: () => {
            this.camera.getPicture(this.cameraOptions).then((res:any) => {
              let finalImage = this.webView.convertFileSrc(res);
              this.photo = finalImage;
              console.log('Using camera result :', finalImage);
            });

          },
        },
        {
          text: 'Gallery',
          handler: () => {
            this.camera.getPicture(this.galleryOptions).then((res: any) => {
              let finalImage = this.webView.convertFileSrc(res);
              this.photo = finalImage;
              console.log('Using camera result :', finalImage);
            });

          },
          cssClass: 'alert-button-confirm',
        },
     ],
     });

    await alert.present();
   }

  ngOnInit() {
  }

}
