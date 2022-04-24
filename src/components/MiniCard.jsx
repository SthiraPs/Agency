import React from 'react'
import styled from 'styled-components';
import Search from '../img/search.png';

const MiniCard = () => {
  return (
    <Container>
        <Image src={Search}/>
        <Text>
            Graphic design, Lorem ipsum is a placeholder text
        </Text>
    </Container>
  )
}

export default MiniCard



const Container = styled.div`
    width: 120px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 15px -5px #000000; 
    box-shadow: 0px 0px 15px -5px #000000;
    align-items: center;

    @media only screen and (max-width: 480px) {
    width: 80px;
  }
`


const Text = styled.p`
    margin-top: 10px;
    text-align: center;

    @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`

const Image = styled.img
`   
    width: 20px
`