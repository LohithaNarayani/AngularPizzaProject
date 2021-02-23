import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {INonVegPizzas, ICartList} from 'src/app/IPizzas.model';
import { PizzaService} from 'src/app/services/pizza.service';
import {CartitemsService} from 'src/app/services/cartitems.service';

@Component({
  selector: 'app-nonvegpizzas',
  templateUrl: './nonvegpizzas.component.html',
  styleUrls: ['./nonvegpizzas.component.scss']
})
export class NonvegpizzasComponent implements OnInit {

  nvegpizzaList:INonVegPizzas[]=[];
  cartitemList:ICartList[]=[];

  nvname="";
  price="";
  size="";

  cartData=<ICartList>{};

  constructor(private router:Router,private pizzaservice:PizzaService,
                    private cartitemsservice:CartitemsService) { }

  ngOnInit(): void {
    this.pizzaservice.getNonVegPizzaData().subscribe(data =>{
      this.nvegpizzaList=data;
    });
  }

  onSearch(){
    if(this.size == ""){
      this.ngOnInit();
    }
    else{
      this.nvegpizzaList = this.nvegpizzaList.filter(res =>{
        return res.size.toLocaleLowerCase().match(this.size.toLocaleLowerCase());
      });
    }
  }

  addToCart(nvegpizzaName:any,Price:any,Size:any){
    window.confirm("Do u want to cart this product?");
    console.log(nvegpizzaName,Price,Size);
    const cartitemsData:any ={nvname:nvegpizzaName,price:Price,size:Size,addtocart:"yes" , buy:"no"};
    this.cartitemsservice.createNVegCartData(cartitemsData).subscribe(data =>{
      console.log(data);
      window.alert('Your product has been added to the cart!');
      this.router.navigateByUrl('/carteditems');
    });
  }


}
