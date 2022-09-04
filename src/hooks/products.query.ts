import React from "react";
import productService from '../services/products.service'
import { QueryCache, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import IProduct from "../types/product.type";
import { AxiosResponse } from "axios";


const useAllProducts=()=>{
    return useQuery<IProduct[],Error>(['products'],()=>productService.getAll())
}

const useProduct=(id:string)=>{
    return useQuery<IProduct,Error>(['product',{ id: 1 }],()=>productService.get(id))
}
const useDeleteProduct=(id:number)=>{
    const queryClient = useQueryClient()
    return useMutation(productService.delete, {
        onSuccess: data => {
          const products:any=queryClient.getQueryData(['products'])
          const data1=products.filter((item:IProduct)=>item.id!==id)
          queryClient.setQueryData(['products'],data1)
        }
      })
}
/*const useUpdateProduct=(data:IProduct,id:any)=>{
    const queryClient = useQueryClient()
    return useMutation(productService.update, {
        onSuccess: data => {
          queryClient.setQueryData(['products', { id: id }], data)
        }
      })
}*/
export {useAllProducts}

