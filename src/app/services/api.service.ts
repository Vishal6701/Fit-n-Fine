import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   headers=new HttpHeaders()
   .set('X-RapidAPI-Key','3c01ba0317mshbfa768a7f2ae2d9p1a372djsnb8b98e9428d1');


  constructor(private http:HttpClient) { }
  Url:string='https://maptoolkit.p.rapidapi.com/geocode/search?q=Pinjore';

 
  mainUrl:string=' http://localhost:3000/allExercise';

  getMapData()
  {
     return this.http.get<any>(this.Url,{'headers':this.headers});

  }

  getData()
  {
   return this.http.get<any>(this.mainUrl);
  }



  searchData()
  {
     return this.http.get<any>("http://localhost:3000/allExercies");
  }

  searchByPart(Data:any)
  {
   return this.http.get<any>("http://localhost:3000/allExercies?target="+Data+"&_page=1&_limit=60");
  }

}
