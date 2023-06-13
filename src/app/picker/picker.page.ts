import { Component, OnInit } from '@angular/core';
import { IonicStorageService } from 'src/storage';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.page.html',
  styleUrls: ['./picker.page.scss'],
})
export class PickerPage implements OnInit {


  fname:any;

  constructor(private storageSrvice:IonicStorageService) { }

  ngOnInit() {
    this.storageSrvice.get('name').then((data:any)=>{
      this.fname = data;
    });
  }

}
