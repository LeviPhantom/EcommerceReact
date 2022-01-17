import { Facebook, Instagram, Twitter } from '@material-ui/icons'
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
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Logo = styled.h1`

`
const Title = styled.h3`

`
const List = styled.ul`

`
const ListItem = styled.li`

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
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>LEVI.</Logo>
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
                    <ListItem>HOME</ListItem>
                    <ListItem>CART</ListItem>
                    <ListItem>SHOES</ListItem>
                    <ListItem>CLOTHES</ListItem>
                    <ListItem>ELECTRONICS</ListItem>
                    <ListItem>WISHLIST</ListItem>
                    <ListItem>TERMS</ListItem>

                </List>
            </Center>
            <Right></Right>
        </Container>
    )
}

export default Footer
