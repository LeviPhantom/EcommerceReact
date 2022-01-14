import { ArrowLeftOutlined , ArrowRightOutlined} from '@material-ui/icons'
import React,{useState, useEffect} from 'react'

import styled from 'styled-components'
const Container =styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:0;
    bottom:0;
    left: ${props=>props.direction === "left" && "10px"};
    right: ${props=>props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.6;
    z-index: 2;
    
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(00vw)
`
const Slide = styled.div`
    display:flex;
    width: 100vw;
    height:100vh;
    align-items: center;;
    background-color: #${props=>props.bg};


`
const InfoContainer = styled.div`
    flex:1;
    padding: 50px

`
const Image = styled.img`
    height:80%
`;
const ImgContainer = styled.div`
    flex:1;
    height:100%;
    display: flex;
    justify-content: center
`
const Tittle = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size:30px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding 10px:
    font-size: 35px;
    background-color: transparent;
    cursor: pointer
`
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {

    };

    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper>
                <Slide bg="f5fafd">
                <ImgContainer>
                <Image src="https://mvcmagazine.com/wp-content/uploads/2020/08/mvccopsupreme.jpg"/>
                </ImgContainer>
                <InfoContainer>
                    <Tittle>WINTER SALE</Tittle>
                    <Desc>Don't miss it 40$ off storewide</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
                </Slide>

                <Slide bg="fcf1ed">
                <ImgContainer>
                <Image src="https://mvcmagazine.com/wp-content/uploads/2020/08/mvccopsupreme.jpg"/>
                </ImgContainer>
                <InfoContainer>
                    <Tittle>Sumer SALE</Tittle>
                    <Desc>Don't miss it 40$ off storewide</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
                </Slide>
                
                <Slide bg="fbf0f4">
                <ImgContainer>
                <Image src="https://mvcmagazine.com/wp-content/uploads/2020/08/mvccopsupreme.jpg"/>
                </ImgContainer>
                <InfoContainer>
                    <Tittle>Spring SALE</Tittle>
                    <Desc>Don't miss it 40$ off storewide</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider
