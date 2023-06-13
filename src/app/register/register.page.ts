import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name:any;
  email:any;
  password:any;
  confirmPassword:any;

  constructor(private fireService:MyserviceService) { }

  ngOnInit() {
  }

  signup(){

    this.fireService
    .signup({ email: this.email, password: this.password })
    .then(
      (res: any) => {
        if (res.user.uid) {
          let data = {
            email: this.email,
            password: this.password,
            name: this.name,
            confirmPassword: this.confirmPassword,
            uid: res.user.uid,
          };
              this.fireService.saveDetails(data).then(
                (res: any) => {

                  alert('Account Created!');
                },
                (err: any) => {
                  console.log(err);
                }
              );
          }
        },
        (err: { message: any }) => {
          alert(err.message);

          console.log(err);
        }
      );
  }
}
