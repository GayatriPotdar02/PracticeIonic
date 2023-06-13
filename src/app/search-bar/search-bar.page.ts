import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss'],
})
export class SearchBarPage implements OnInit {
  public cars = [
    'Vaganar' , ' Swift' , 'Baleno' , 'Kia' , 'innova' , 'tigor' , 'seltos'
  ];

  public result = [...this.cars]
  constructor() { }

  ngOnInit() {
  }

  searchCarModels(event:any){
     const a = event.target.value.toLowerCase();
     this.result = this.cars.filter((data)=> data.toLowerCase().indexOf(a)>-1); 
    }

}
