import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IVegPizzas,INonVegPizzas} from 'src/app/IPizzas.model';


@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  apiUrl:string="http://localhost:3000/vegpizzas";
  httpUrl:string="http://localhost:3000/nonvegpizzas";

  constructor(private httpClient: HttpClient) { }

  getVegPizzaData(){
    console.log(this.httpClient.get(this.apiUrl));
    this.httpClient.get(this.apiUrl).subscribe({
      next: function (res){
        console.log(res);
      },
      error: function (err){
        console.log(err);
      } 
    })
    this.httpClient.get(this.apiUrl).subscribe(
      data => console.log(data));
      return this.httpClient.get<IVegPizzas[]>(this.apiUrl);
  }

  getNonVegPizzaData(){
    console.log(this.httpClient.get(this.httpUrl));
    this.httpClient.get(this.httpUrl).subscribe({
      next: function (res){
        console.log(res);
      },
      error: function (err){
        console.log(err);
      } 
    })
    this.httpClient.get(this.httpUrl).subscribe(
      data => console.log(data));
      return this.httpClient.get<INonVegPizzas[]>(this.httpUrl);
  }
}
