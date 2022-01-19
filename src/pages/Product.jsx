import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
const Container = styled.div`
`;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;

const ImgContainer = styled.div`
    flex: 1

`;

const Image = styled.img`
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 300;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 200;
    font-size: 30px
`;
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between
`;
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props)=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`;
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
`;
const FilterSizeOption = styled.option`
`;
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;
const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`;
const Button = styled.button`
    padding: 10px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }

`;
const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Image src='https://cdn.flightclub.com/750/TEMPLATE/272669/1.jpg'/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Jordan 1 Bred Patent</Title>
                    <Desc>Featuring a classic mix of hues, the Air Jordan 1 Retro High OG 'Patent Bred' also sports an elevated construction. Built entirely with patent leather, the shoe's upper appears in a familiar mix of black and Varsity Red, with perforations on the toe box offering breathability. Underfoot, a white Air midsole provides cushioning and contrast, giving way to a Varsity Red finish on the concentric rubber outsole, which is included for traction.</Desc>
                    <Price>$190</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>8</FilterSizeOption>
                                <FilterSizeOption>9</FilterSizeOption>
                                <FilterSizeOption>10</FilterSizeOption>
                                <FilterSizeOption>10.5</FilterSizeOption>
                                <FilterSizeOption>11</FilterSizeOption>
                                <FilterSizeOption>11.5</FilterSizeOption>
                                <FilterSizeOption>12</FilterSizeOption>

                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product
