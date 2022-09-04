import { useState } from "react";
import { UseShoppingCart } from "../../../context/ShoppingCartContext";
import Product from "../../../types/product.type";
import formatCurrency from "../../../utilities/formatCurrency";
const ProductComponent = ({ id,price,title,image,description,category }:Product) => {
  const {getItemQuantity,increaseCartQuantity,decreaseCartQuantity,removeFromCart}=UseShoppingCart()
  const quantity=getItemQuantity(id)
  return (
    <>
      <div className="project_box ">
        <div className="dark_white_bg">
          <img src={image} alt="#" className="box-fixed" />
        </div>
        <div className="row">
          <div className="col-8">
          <h3>{title}</h3>
          </div>
          <div className="col-3">
          <h5>{formatCurrency(price)}</h5>
          </div>
        </div>
      
        {quantity===0? (<button className="m-2 btn btn-sm btn-primary w-100" onClick={()=>increaseCartQuantity({ id,price,title,image})}>+ Add To Card</button>):
        (<div><button className="m-2 btn btn-sm btn-danger" onClick={()=>decreaseCartQuantity(id)}>-</button><span>{quantity}</span><button className="m-2 btn btn-sm btn-success"  onClick={()=>increaseCartQuantity({ id,price,title,image})}>+</button></div>)
  }
         </div>
    </>
  );
};

export default ProductComponent;
