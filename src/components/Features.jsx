import React from 'react'
import styled from 'styled-components';
import App from '../img/app.png';
import AnimatedShapes from './AnimatedShapes';

const Features = () => {
  return (
    <Container>
        <Left>
            <Image src={App}/>
        </Left>
        <Right>
            <Title>
                <b>good</b> design <br/>
                <b>good</b> business

            </Title>
            `
            <SubTitle>
                We know that good design mean good business
            </SubTitle>
            <Desc>
            Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
            </Desc>
            <Desc>
            Typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available
            </Desc>
            <Button>
                Learn more
            </Button>
        </Right>
        <AnimatedShapes/>
    </Container>
  )
}

export default Features

const Title = styled.span`

    font-size: 70px;
    @media only screen and (max-width: 480px) {
    font-size: 50px;
  }
`
const SubTitle = styled.span`

    font-size: 24px;
    color: #777;
    margin-top: 20px;
`
const Desc = styled.p`
    font-size: 20px;
    font-style: italic;
    color: #333;
    margin-top: 20px;

`
const Button = styled.button`
    width: 150px;
    padding : 15px 20px;
    color: white;
    background-color: darkblue;
    border: none;
    border-radius: 15px;
    font-size: 20px;
    margin-top: 20px;
    cursor: pointer;

`
const Container = styled.div`

    display: flex;

    @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }

`
const Left = styled.div`

    width: 50%;

    @media only screen and (max-width: 480px) {
    display: none;
  }

`
const Right = styled.div`

    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;

    @media only screen and (max-width: 480px) {
    width: 80%;
  }
    
`

const Image = styled.img
`   margin-top: 50px;
    width: 80%;
`