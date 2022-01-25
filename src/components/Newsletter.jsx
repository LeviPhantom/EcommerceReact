import { Send } from '@material-ui/icons'
import React from 'react'
import  styled  from "styled-components"
import { mobile } from '../responsive'
const Container = styled.div`
    height:60vh;
    background_color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${mobile({backgroundColor: "#fff8f8"})}

`
const Title = styled.h1`
    font-size: 60px;
    margin-bottom: 20px
`
const Description = styled.div`
    font-size: 24px;
    fontweight: 300;
    margin-bottom: 20px;
    ${mobile({textAlign: "center"})}

`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    background-color: white;
    border: 1px solid lightgrey;
    ${mobile({width: "70%"})}

`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 10px;
`
const Button = styled.button`
    flex: 2;
    border: none;
    color: white;
    background-color: teal
`



const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get updates and join our cook group</Description>
            <InputContainer>
                <Input placeholder="Enter Your email"/>
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
            
        </Container>
    )
}

export default Newsletter
