export interface IVegPizzas{
    id:string;
    vname:string;
    image:string;
    size:string;
    price:string;
}

export interface INonVegPizzas{
    id:string;
    nvname:string;
    image:string;
    size:string;
    price:string;
}

export interface ICartList{
    id:string;
    vname:string;
    nvname:string;
    image:string;
    size:string;
    price:string;
    addtocart:string;
    buy:string;
}