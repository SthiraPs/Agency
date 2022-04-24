import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <List>

                <ListItems> Guide </ListItems>
                <ListItems> Support </ListItems>
                <ListItems> Careers </ListItems>
                <ListItems> Community </ListItems>

            </List>

            <Copyright>
                © 2022 Fletora
            </Copyright>

        </Wrapper>
    </Container>
  )
}

export default Footer  

const Container = styled.div`
    height: 10%;
    background: #000000;
    color: lightgray;;
`
const Wrapper = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;

    @media only screen and (max-width: 480px) {
    padding: 20px 10px;
  }
    
`

const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    @media only screen and (max-width: 480px) {
    font-size: 14px;
  }


`

const ListItems = styled.li`
    margin-right: 20px;
`


const Copyright = styled.span`

@media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`
