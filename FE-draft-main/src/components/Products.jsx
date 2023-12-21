import { useEffect, useState } from "react";
import styled from "styled-components";
import { normal } from "../data";
import Product from "./Product";
import * as ProductService from '../services/ProductService'
import { useQuery } from 'react-query';
import axios from "axios"
const Container = styled.div`
    
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Products = ({ cat, filters, sort, limit }) => {
  // const [products, setProducts] = useState([]);
  // const [limit,setLimit]=useState(4)
  // const [filteredProducts, setFilteredProducts] = useState([]);
  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
        // const res = await axios.get(
        //   cat
        //     ? `http://localhost:3001/api/products?category=${cat}`
        //     : "http://localhost:3001/api/products"
        // );
//         const res = await axios.get(
          
            
//              `http://localhost:3001/api/product/get-all?limit=${limit}`
//         );
//         setProducts(res.data);
//       } catch (err) {}
//     };
//     getProducts();
//   }, [cat]);
// console.log(products)
  // useEffect(() => {
  //   cat &&
  //     setFilteredProducts(
  //       products.filter((item) =>
  //         Object.entries(filters).every(([key, value]) =>
  //           item[key].includes(value)
  //         )
  //       )
  //     );
  // }, [products, cat, filters]);

  // useEffect(() => {
  //   if (sort === "newest") {
  //     setFilteredProducts((prev) =>
  //       [...prev].sort((a, b) => a.createdAt - b.createdAt)
  //     );
  //   } else if (sort === "asc") {
  //     setFilteredProducts((prev) =>
  //       [...prev].sort((a, b) => a.price - b.price)
  //     );
  //   } else {
  //     setFilteredProducts((prev) =>
  //       [...prev].sort((a, b) => b.price - a.price)
  //     );
  //   }
  // }, [sort]);


//new

  // const searchProduct = useSelector((state) => state?.product?.search)
  // const searchDebounce = useDebounce(searchProduct, 500)
  const [loading, setLoading] = useState(false)
  // const [limit, setLimit] = useState(6)
  const [typeProducts, setTypeProducts] = useState([])
  
  const fetchProductAll = async (context) => {
    // const limit = context?.queryKey && context?.queryKey[1]
    const search = context?.queryKey && context?.queryKey[2]
    const res = await ProductService.getAllProduct(search, limit)

    return res

  }

  // const fetchAllTypeProduct = async () => {
  //   const res = await ProductService.getAllTypeProduct()
  //   if(res?.status === 'OK') {
  //     setTypeProducts(res?.data)
  //   }
  // }

  const { isLoading, data: products, isPreviousData } = useQuery(['products', limit], fetchProductAll, { retry: 3, retryDelay: 1000, keepPreviousData: true })
console.log(products)
  // useEffect(() => {
  //   fetchAllTypeProduct()
  // }, [])




  return (
    // <Container>
    //     {cat
    //     ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
    //     : products
    //         .slice(0, 8)
    //         .map((item) => <Product item={item} key={item.id} />)}
    // </Container>

    <Container>
      {products?.data?.map((item) => (
        <Product item={item} key={item._id} />
      ))}
      
    </Container>
  )
}

export default Products