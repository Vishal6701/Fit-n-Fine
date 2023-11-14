import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {
  term="";
  landingData:any;
  pages:number=1;

  constructor(private API:ApiService,private route:Router) {
 
   }

  ngOnInit(): void {
  }

  loadData(Data:any)
  {
      this.API.searchByPart(Data).subscribe((res:any)=>
      {
        console.log(res);
        this.landingData=res;
      })  
  }

  onSubmit(data:any)
  {    
    this.route.navigateByUrl('main');
  }

}
