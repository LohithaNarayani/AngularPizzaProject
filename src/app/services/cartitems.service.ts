import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ICartList } from '../IPizzas.model';

@Injectable({
  providedIn: 'root'
})
export class CartitemsService {

  Httpurl:string="http://localhost:3000/cartitems";

  constructor(private httpClient: HttpClient) { }

  //veg data....
  getVegPizzaCartData(){
    console.log(this.httpClient.get(this.Httpurl));
    this.httpClient.get(this.Httpurl).subscribe({
      next: function (res){
        console.log(res);
      },
      error: function (err){
        console.log(err);
      } 
    })
    this.httpClient.get(this.Httpurl).subscribe(
      data => console.log(data));
      return this.httpClient.get<ICartList[]>(this.Httpurl);
  }

  createVegCartData(cartvegData:ICartList){
    return this.httpClient.post(this.Httpurl,cartvegData);
}


//non-veg data....
getNVegPizzaCartData(){
  console.log(this.httpClient.get(this.Httpurl));
  this.httpClient.get(this.Httpurl).subscribe({
    next: function (res){
      console.log(res);
    },
    error: function (err){
      console.log(err);
    } 
  })
  this.httpClient.get(this.Httpurl).subscribe(
    data => console.log(data));
    return this.httpClient.get<ICartList[]>(this.Httpurl);
}

createNVegCartData(cartnvegData:ICartList){
  return this.httpClient.post(this.Httpurl,cartnvegData);
}

removeCartData(id:ICartList){
  return this.httpClient.delete(this.Httpurl +"/" +id).subscribe(
    (data) =>{
      console.log(data);
    },
    (error) =>
  console.log("Error" +error));
}

}
