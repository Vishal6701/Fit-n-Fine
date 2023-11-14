import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  term="";



  landingData:any;

  MainData=[
    {
      id:1,bodyPart:"Chest", imgUrl:"https://v2.exercisedb.io/image/e9IOY87Ych1b69", name:""
    },
    {
      id:2,bodyPart:"Biceps", imgUrl:"https://v2.exercisedb.io/image/Z8VwON-qze12a4",name:""
    },
    {
      id:3,bodyPart:"Back", imgUrl:"https://tse4.mm.bing.net/th/id/OIP.d4D6r9nFfWN6hWfiDLD21gHaKJ?pid=ImgDet&w=207&h=283&c=7&dpr=1.3",name:""
    }
   
  ]

  constructor(private route:Router,private API:ApiService) {

    this.loadData();
   }

  ngOnInit(): void {
  }

  display="none";

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
   

  loadData()
  {
      this.API.getData().subscribe((res:any)=>
      {
        console.log(res);
        this.landingData=res;
      })  
  }

  onSubmit(data:any)
  {
    this.API.searchData().subscribe((res)=>
    {
      console.log(res.length);
      
      console.log(data);
    })
  }



  

}
