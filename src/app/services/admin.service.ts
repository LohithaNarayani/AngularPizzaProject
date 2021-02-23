import { Injectable } from '@angular/core';
import {IAdmin} from 'src/app/IUser.model';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  Url:string="http://localhost:3000/Admin";

  constructor(private httpClient: HttpClient) { }

  getData(){
    this.httpClient.get(this.Url).subscribe(data => console.log(data));
    return this.httpClient.get<IAdmin[]>(this.Url);
  }
  
}
