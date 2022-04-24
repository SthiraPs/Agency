import React from 'react'
import styled from "styled-components";
import PriceCard from './PriceCard';

const Prices = () => {
  return (
    <Container>
        <PriceCard price ="29" type ="Basic"/>
        <PriceCard price ="59" type ="Standard"/>
        <PriceCard price ="99" type ="Premium"/>
    </Container>
  )
}

export default Prices

const Container = styled.div`

    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center ;

    @media only screen and (max-width: 480px) {
    flex-direction: column;
  }

`