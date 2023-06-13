import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicStorageService } from 'src/storage';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:any;
  password:any;
  userData: any;

  constructor(private fireService:MyserviceService,
    private router: Router,
    private storage: IonicStorageService) { }

  ngOnInit() {
  }

  login(){

    this.fireService
    .loginWithEmail({ email: this.email, password: this.password })
    .then(
      (res: any) => {
        console.log(res);
        if (res.user.uid) {
          this.fireService.getDetails({ uid: res.user.uid }).subscribe(
            (res: any) => {
              this.userData = res;
              console.log(this.userData);
              this.storage.store('userData', this.userData).then((data) => {
                this.router.navigate(['/home']);
              });
            },
            (err: any) => {
              console.log(err);
            }
          );
        }
      },
      (err: any) => {
        alert(err.message);
        console.log(err);
      }
    );
}
  
  signup(){
    this.router.navigateByUrl('register');
  }
  
}
