import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';
const Container = styled.div`
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center
`;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({padding: "10px"})}
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  cursor: pointer;
  font-weight: 500;
  border: ${(props)=>props.type === "filled" && "none"};
  background-color: ${(props)=>props.type === "filled" ? "black" : "transparent"};
  color: ${(props)=>props.type === "filled" && "white"};

`;
const TopText = styled.span`
  text-decoration: underline;
  margin: 0px 10px;
  cursor: pointer;

`;
const TopTexts = styled.div`
  ${mobile({display: "none"})}

  
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: "column"})}

`;
const Info = styled.div`
  flex: 3
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  ${mobile({flexDirection: "column"})}

  
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex

  
`;
const Image = styled.img`
  width: 250px;
  ${mobile({width: "20vh", height:"110px"})}

`;
const ProductName = styled.span`
  
`;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color} 
`;
const ProductSize = styled.span`
  
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  
`;
const ProductId = styled.span`
  
`;
const ProductAmountContainer = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 15px
  
`;
const ProductAmount = styled.span`
  font-size: 18px;
  margin: 5px;
  ${mobile({margin: "5px 15px"})}

  
`;
const ProductPrice = styled.span`
  font-size: 25px;
  font-weight: 300;
  ${mobile({marginBottom: "15px"})}

  
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding 20px;
  height: 50vh;
`;
const SummaryItem = styled.div`
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props=>props.type === "total" && "500"};
  font-size: ${props=>props.type === "total" && "24px"}
`
const SummaryTitle = styled.h1`
  font-weight: 200;

`
const SummaryItemText = styled.span`
`
const SummaryItemPrice = styled.span`
`
const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600
`
const Cart = () => {
  return( 
  <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>COUNTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (3)</TopText>

          </TopTexts>
          <TopButton type="filled">CHECK OUT NOW</TopButton>

        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://www.hoopjordans.net/wp-content/uploads/2021/07/Air-Jordan-4-Red-Thunder-Black-White-Red-CT8527-016-For-Sale.jpg"/>
                <Details>
                  <ProductName><b>Product:</b> JORDAN 4 Red Thunder</ProductName>
                  <ProductId><b>ID:</b> 2255882350</ProductId>
                  <ProductColor color="black"/>
                  <ProductSize><b>Size:</b> 10 </ProductSize>

                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add/>
                  <ProductAmount>2</ProductAmount>
                  <Remove/>
                </ProductAmountContainer>
                <ProductPrice>$350</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr/>
            <Product>
              <ProductDetail>
                <Image src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F08%2Fbest-sneaker-releases-august-week-4-air-jordan-4-lightning-sacai-fragment-design-nike-ldwaffle-blackened-blue-wtaps-new-balance-990v2-1.jpg?w=1600&cbr=1&q=90&fit=max"/>
                <Details>
                  <ProductName><b>Product:</b> JORDAN 4 Lightning</ProductName>
                  <ProductId><b>ID:</b> 2255882360</ProductId>
                  <ProductColor color="yellow"/>
                  <ProductSize><b>Size:</b> 10 </ProductSize>

                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add/>
                  <ProductAmount>1</ProductAmount>
                  <Remove/>
                </ProductAmountContainer>
                <ProductPrice>$300</ProductPrice>
              </PriceDetail>
            </Product>
            
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$1000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$7.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>ShippingDiscount</SummaryItemText>
              <SummaryItemPrice>-$7.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$1000</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>CHECK OUT MOW</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
  </Container>
  );
};

export default Cart;
