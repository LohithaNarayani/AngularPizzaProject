import { Component, OnInit } from '@angular/core';
import { IVegPizzas,ICartList } from 'src/app/IPizzas.model';
import { PizzaService } from 'src/app/services/pizza.service';
import { Router} from '@angular/router';
import {CartitemsService} from 'src/app/services/cartitems.service';

@Component({
  selector: 'app-vegpizzas',
  templateUrl: './vegpizzas.component.html',
  styleUrls: ['./vegpizzas.component.scss']
})
export class VegpizzasComponent implements OnInit {

  vegpizzaList:IVegPizzas[]=[];
  cartitemList:ICartList[]=[];

  vname="";
  price="";
  size="";
  image="";

  cartData=<ICartList>{};

  constructor(private router:Router,private pizzaservice:PizzaService,
                  private cartitemsservice:CartitemsService) { }

  ngOnInit(): void {
    this.pizzaservice.getVegPizzaData().subscribe(data =>{
      this.vegpizzaList=data;
    });
  }

  onSearch(){
    if(this.size == ""){
      this.ngOnInit();
    }
    else{
      this.vegpizzaList = this.vegpizzaList.filter(res =>{
        return res.size.toLocaleLowerCase().match(this.size.toLocaleLowerCase());
      });
    }
  }

  addToCart(vegpizzaName:any,Price:any,Size:any,Image:any){
    window.confirm("Do u want to cart this product?");
    console.log(vegpizzaName,Price,Size,Image);
    const cartitemsData:any ={vname:vegpizzaName,price:Price,size:Size,image:Image,addtocart:"yes" , buy:"no"};
    this.cartitemsservice.createVegCartData(cartitemsData).subscribe(data =>{
      console.log(data);
      window.alert('Your product has been added to the cart!');
      this.router.navigateByUrl('/carteditems');
    });
  }

}
