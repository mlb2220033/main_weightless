import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import Topbanner from "../components/Topbanner";
import Bottomnews from "../components/Bottomnews";
import * as ProductService from '../services/ProductService'
import Navbarnotrans from "components/Navbarnotrans";
const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;
const ProductListType = () => {
  const location = useLocation()
  const cat = location.pathname.split("/")[2]
  const [products, setProducts] = useState([])
  const [limit, setLimit] = useState(12)
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")
  const [typeProducts, setTypeProducts] = useState([])
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  const fetchProductType = async (type,page=0,limit=10) => {
    // setLoading(true)
    const res = await ProductService.getProductType(type,page,limit)
    if(res?.status == 'OK') {
        
      setProducts(res?.data)
        
    }else {
        // setLoading(false)
    }
}

useEffect(() => {
    if(cat){
        fetchProductType(cat)
    }
}, [cat])
  return (
    <Container>
        
        <Navbarnotrans></Navbarnotrans>
        <Topbanner></Topbanner>
        <Title>{cat}</Title>
        <FilterContainer>
            <Filter><FilterText>Filter products:</FilterText>
            <Select name="color" onChange={handleFilters}>
              <Option >All</Option>
              {/* 
                <Option>Wear</Option>
                <Option>Accessories</Option>
                <Option>Equipment</Option> */}
              {typeProducts.map((t)=>(
                <Option>{t}</Option>
              ))
              }
            </Select>
            
            </Filter>
            <Filter><FilterText>Sort products:</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
                <Option selected>Newest</Option>
                <Option>Price (asc)</Option>
                <Option>Price (desc)</Option>
            </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat}  search={sort} limit={limit}></Products>
        <button onClick={()=>setLimit((prev)=>prev+10)}>load more</button>
        <Bottomnews></Bottomnews>
        <Newsletter></Newsletter>
        <Footer></Footer>
    </Container>
  )
}

export default ProductListType