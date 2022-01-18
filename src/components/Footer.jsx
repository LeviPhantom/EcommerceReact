import { Facebook, Instagram, MailOutline, Phone, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from "styled-components"
const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Logo = styled.h1`

`
const Title = styled.h3`
    margin-bottom: 30px;

`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px

`
const Desc = styled.p`
    margin: 20px 0px;

`
const SocialContainer = styled.div`
    display: flex;

`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;


`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    marging-right: 10px;


`
const Payment = styled.img`
    margin-top: 10px;
    width: 50%;
    height: 35%

`
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>LEVIVI.</Logo>
                <Desc>
                    Sell everything store
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Instagram/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Shoes</ListItem>
                    <ListItem>Clothing</ListItem>
                    <ListItem>Electronics</ListItem>
                    <ListItem>PlayStation 5</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>

                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem ><MailOutline style={{marginRight:"10px"}}/>  dinhphuc144@gmail.com</ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}}/>  206 928 1419</ContactItem>
                <Payment src="https://miro.medium.com/max/636/1*VRKsEolmw9OKZb7svyc9mw.png"/>
            </Right>
        </Container>
    )
}

export default Footer
