import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  Student:any=[
    {id:1,name:"Vishal",age:22},
    {id:2,name:"Nishal",age:24},
    {id:3,name:"Kunal",age:26},
    {id:4,name:"Vihal",age:28},

  ];
  body:any;
  display="none";

  constructor(private API:ApiService) {

    this.loadData()
     
   }

  ngOnInit(): void {
  }

  loadData()
  {
    console.log();
    
     this.API.getMapData().subscribe((res:any)=>
     {
      console.log(res);
      this.body=res;
     })
   
   
  }
 

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
   
  
  

}
