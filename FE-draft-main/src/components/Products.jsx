import { useEffect, useState } from "react";
import styled from "styled-components";
import { normal } from "../data";
import Product from "./Product";
import * as ProductService from '../services/ProductService'
import { useQuery } from 'react-query';
import axios from "axios"

import { useSelector } from "react-redux";
const Container = styled.div`
    
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Products = ({cat, search, limit }) => {


  
  const fetchProductAll = async (context) => {
    // const limit = context?.queryKey && context?.queryKey[1]
    // const search = context?.queryKey && context?.queryKey[2]
    if(cat){
      console.log(cat)
      const res = await ProductService.getProductType(cat)
      return res
    }else{
    const res = await ProductService.getAllProduct(search, limit)
    console.log('res',res,limit)
    return res
    }
    }
const { isLoading, data: products, isPreviousData } = useQuery(['products', limit], fetchProductAll, { retry: 3, retryDelay: 1000, keepPreviousData: true })
console.log(products)




  return (

    
    <Container>
      {products?.data?.map((item) => 
      (
        <Product item={item} key={item._id} />
      )
      )}
      
    </Container>
    
  )
}

export default Products