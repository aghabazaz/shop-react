import React from "react";
import productService from '../services/products.service'
import { useQuery } from "@tanstack/react-query"
import IProduct from "../types/product.type";
import { AxiosResponse } from "axios";
const useAllProducts=()=>{
    return useQuery<IProduct[],Error>(['products'],()=>productService.getAll())
}

export {useAllProducts}

