import React from "react";
import productService from '../services/products.service'
import { useQuery } from "react-query";

const useAllProducts=()=>{
    return useQuery("products",productService.getAll)
}
