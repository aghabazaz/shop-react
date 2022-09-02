import { useState } from "react";

const Product = ({ product, index }) => {
    const [count,setCount]=useState(0)
    const handleAddProduct = ()=>{
        setCount(count+1)
    }
    const handleSubProduct=()=>{
        setCount(count-1)
    }
  return (
    <>
      <div className="project_box " key={index}>
        <div className="dark_white_bg">
          <img src={product.image} alt="#" className="box-fixed" />
        </div>
        <h3>{product.title}</h3>
         <button className="m-2 btn btn-sm btn-danger" onClick={handleSubProduct}>-</button><span>{count}</span><button className="m-2 btn btn-sm btn-success"  onClick={handleAddProduct}>+</button>
      </div>
    </>
  );
};

export default Product;
