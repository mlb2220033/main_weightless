import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import Topbanner from "../components/Topbanner";
import Bottomnews from "../components/Bottomnews";
import Navbarnotrans from "components/Navbarnotrans";
import * as ProductService from "../services/ProductService"
import { useSelector } from "react-redux";
const Container = styled.div`

`;
const Wrapper = styled.div`
padding-left:5rem;
padding-right:5rem;
text-align: center; /* Căn giữa theo chiều ngang */
align-items: center; /* Căn giữa theo chiều dọc */
${mobile({ margin: "10px 0px" })}
`;



const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
`;

const Filter = styled.div`
  margin: 20px;
  padding:10px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  
  padding:10px 10px 10px 0px;
  // margin-right: 20px;
  cursor:pointer;
  background-color: #ffffff;
  font-size: 16px;
  border:2px solid black;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option`
cursor:pointer;
background-color: #ffffff;
font-size: 16px;
`;
const Button = styled.button`
cursor:pointer;
display: flex;
text-align: center; /* Căn giữa theo chiều ngang */
align-items: center; /* Căn giữa theo chiều dọc */
font-size: 16px;
padding: 10px;
border-color: black;
background-color: #fff;
color:#000;
&:hover {
  background-color: #fe5f00; // Màu của văn bản khi hover
  border-color:#fe5f00;
  color: white;
  transition: 0.3s ease-in-out;
}
`;
const ButtonContainer = styled.div`
  display: flex;
  text-align:justify;
  min-width: 0;
  max-width: 100%;
  object-fit:contain;
  margin-bottom:20px;
  justify-content:center;
  

`;
const Title = styled.h1`
  font-family: 'Fjalla One', sans-serif;
  letter-spacing: 0.05em;
  position: relative;
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom:-20px;
    left: 0;
    width: 100%;
    height: 0.5px;
    background-color: black; /* black color */
}
 
`;

const ProductList = () => {
  const location = useLocation()
  const cat = location.pathname.split("/")[2]
  const [limit, setLimit] = useState(20)
  const [filters, setFilters] = useState({})
  const search = useSelector((state) => state?.product?.search) 
  const [sort, setSort] = useState("newest")
  const [typeProducts, setTypeProducts] = useState([])
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  const fetchAllTypeProduct = async () => {
    const res = await ProductService.getAllTypeProduct()
    if(res?.status === 'OK') {
      setTypeProducts(res?.data)
    }
  }
  useEffect(() => {
    fetchAllTypeProduct()
  }, [])
  return (
    <Container>

        {/* <Announcement></Announcement> */}
        {/* <Navbar></Navbar> */}
        <Navbarnotrans></Navbarnotrans>
        <Topbanner></Topbanner>

        {/* <Title>PRODUCTS</Title> */}
        <Wrapper>
          
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
        <Products cat={cat} search={search} sort={sort} limit={limit}></Products>
        <ButtonContainer>
        <Button onClick={()=>setLimit((prev)=>prev+8)}>LOAD MORE</Button>
        </ButtonContainer>
        {/* <Bottomnews></Bottomnews> */}
        {/* <Newsletter></Newsletter> */}
        </Wrapper>
        <Footer></Footer>
    </Container>
  )
}

export default ProductList