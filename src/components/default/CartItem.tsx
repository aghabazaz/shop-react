import { UseShoppingCart } from "../../context/ShoppingCartContext";
import ProductDataService from "../../services/products.service";

import { useEffect, useState } from "react";
import Product from "../../types/product.type";
import formatCurrency from "../../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
  image:string;
  title:string;
  price:number
};
export function CartItem({ id, quantity, image, title, price }: CartItemProps) {
  const { removeFromCart } = UseShoppingCart();

  return <div className="row" >
     <div className="col-4">
        <img src={image}/>
    </div>
    <div className="col-8">
        <div>{title}</div>
        <div >{formatCurrency(price)}</div>
        <div>count:{quantity}</div>
        <div>{formatCurrency(quantity*price)}</div>
    </div>
   
  </div>;
}
