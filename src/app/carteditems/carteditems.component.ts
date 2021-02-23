import { Component, OnInit } from '@angular/core';
import { ICartList } from '../IPizzas.model';
import { CartitemsService } from '../services/cartitems.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-carteditems',
  templateUrl: './carteditems.component.html',
  styleUrls: ['./carteditems.component.scss']
})
export class CarteditemsComponent implements OnInit {

  cartItemList:ICartList[]=[];
  cartData=<ICartList>{};

  constructor(private router:Router,private cartitemsservice:CartitemsService) { }

  ngOnInit(): void {
    this.cartitemsservice.getVegPizzaCartData().subscribe(data =>{
      this.cartItemList=data;
    });
  }

  removeCartData(id:any){
    window.confirm("Do u want to remove this product from cart ?");
    console.log(id);
    this.cartitemsservice.removeCartData(id);
    window.confirm("Removed the product from cart successfully!!");
    }

}
