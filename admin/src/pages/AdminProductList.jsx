import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Products from "../components/Products";

import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";


import * as ProductService from "../services/ProductService"
const Container = styled.div`

`;
const Wrapper = styled.div`
padding-left:5rem;
padding-right:5rem;
text-align: center; /* Căn giữa theo chiều ngang */
align-items: center; /* Căn giữa theo chiều dọc */
${mobile({ margin: "10px 0px" })}
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

const ProductList = () => {
  const location = useLocation()
  const cat = location.pathname.split("/")[2]
  const [limit, setLimit] = useState(20)
  const navigate=useNavigate()
  const [sort, setSort] = useState("newest")
  const [typeProducts, setTypeProducts] = useState([])

  const fetchAllTypeProduct = async () => {
    const res = await ProductService.getAllTypeProduct()
    if(res?.status === 'OK') {
      setTypeProducts(res?.data)
      console.log(res?.data)
    }
  }
  useEffect(() => {
    fetchAllTypeProduct()
  }, [])
  return (
    <Container>
      <div>AdminProducts</div>
        <Wrapper>
          
        {/* <FilterContainer>
            <Filter><FilterText>Filter products:</FilterText>
            <Select name="color" >
              <Option >All</Option>

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
        </FilterContainer> */}
        <ButtonContainer>
          <Button  onClick={()=>navigate(`/create`)}>Add new Porduct</Button>
        </ButtonContainer>

        <Products   sort={sort} limit={limit}></Products>
        <ButtonContainer>
          <Button  onClick={()=>setLimit((prev)=>prev+12)}>LOAD MORE</Button>
        </ButtonContainer>

        </Wrapper>

    </Container>
  )
}

export default ProductList