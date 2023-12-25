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
import Navbarnotrans from "components/Navbarnotrans";
import * as ProductService from '../services/ProductService'

const Container = styled.div``;

const Title = styled.h1`
  font-family: 'Fjalla One', sans-serif;
  letter-spacing: 0.05em;
  position: relative;
  margin:20px;
  text-align:center;
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
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
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
const Select = styled.select`
  padding:10px 10px 10px 0px;
  // margin-right: 20px;
  cursor:pointer;
  background-color: #ffffff;
  font-size: 16px;
  border:2px solid black;
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
        <Wrapper>
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
        <ButtonContainer>
        <Button onClick={()=>setLimit((prev)=>prev+10)}>LOAD MORE</Button>
        </ButtonContainer>
        {/* <Bottomnews></Bottomnews>
        <Newsletter></Newsletter> */}
        </Wrapper>
        <Footer></Footer>
    </Container>
  )
}

export default ProductListType