import React from 'react'
import styled from "styled-components";

const PriceCard = (props) => {
  return (
      <Container>

        <PriceContainer>
            $ <Price> {props.price} </Price> /month
        </PriceContainer>

        <Type>{props.type} Plan</Type>

        <List>
            <ListItem> Free delivery</ListItem>
            <ListItem> More offers</ListItem>
            <ListItem> Diffrent sizes</ListItem>
            <ListItem> Cash on delivery</ListItem>

        </List>

        <Button>JOIN NOW</Button>

      </Container>
    
  )
}

export default PriceCard

const Container = styled.div`

    display: flex;
    flex-direction: column;
    width: 250px;
    background-color: white;
    border-radius: 10px;
    padding: 40px 20px;
    align-items: center;
    margin-right: 80px;
    -webkit-box-shadow: 0px 0px 15px -5px #000000; 
    box-shadow: 0px 0px 15px -5px #000000;

    @media only screen and (max-width: 480px) {
    margin-bottom: 10px;
    margin-right: 0px;
    padding: 10px ;
  }
`

const PriceContainer = styled.div`

    display: flex;
    align-items: center;
`

const Price = styled.span`

    font-weight: bold;
    font-size: 50px;

    @media only screen and (max-width: 480px) {
    font-size: 30px;
    }
`

const Type = styled.button`

    padding: 20px;
    margin: 10px 0;
    border: 1.5px solid crimson;
    color: crimson;
    background-color: white;
    border-radius: 20px;

    @media only screen and (max-width: 480px) {
        display: none;
    }
`


const List = styled.ul`

    list-style: none;
    text-align: center;

    margin-left: -35px;
    @media only screen and (max-width: 480px) {
    margin-top: 10px;
  }
`

const ListItem = styled.li`

    margin: 20px 0;
    align-content: center;

    @media only screen and (max-width: 480px) {
    margin: 5px 0;
    font-size: 12px;
    }

`

const Button = styled.button`

    border: none;
    background-color: darkblue;
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;

    @media only screen and (max-width: 480px) {
    font-size: 14px;
    padding: 10px;
    font-weight: 400;
  }
`