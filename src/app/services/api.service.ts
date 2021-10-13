import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { yojnaModel } from '../models/yojna.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http : HttpClient) { }
  url = 'http://localhost:3000/yojna/';

  addYojna(yoj:yojnaModel) {
    return this.http.post(this.url, yoj);
  }

  getYojnaList(){
    return this.http.get(this.url);
  }

  updateYojna(yoj:yojnaModel){
   return this.http.put(`${this.url}/${yoj._id}`,yoj);
  }

  deleteYojna(id:any){
   return this.http.delete(`${this.url}/${id}`);
  }
}
