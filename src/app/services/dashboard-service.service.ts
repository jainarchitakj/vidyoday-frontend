import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DashboardModel } from 'src/app/models/dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(private http:HttpClient) { }

  postSchemes(data:any){
    return this.http.post<any>("http://localhost:3000/yojna/",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
  getSchemes(){
    return this.http.get<any>("http://localhost:3000/yojna/")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateSchemes(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/yojna/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteSchemes(id:number){
    return this.http.delete<any>("http://localhost:3000/yojna/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }



  url = 'http://localhost:3000/yojna/';

  addSchemes(yoj:DashboardModel) {
    return this.http.post(this.url, yoj);
  }

  getSchemesList(){
    return this.http.get(this.url);
  }

  updateSchemess(yoj:DashboardModel){
   return this.http.put(`${this.url}/${yoj._id}`,yoj);
  }

  deleteSchemess(id:any){
   return this.http.delete(`${this.url}/${id}`);
  }
}
