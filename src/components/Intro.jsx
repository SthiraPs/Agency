import React from 'react'
import styled from 'styled-components';
import Woman from '../img/woman.png';
import AnimatedShapes from './AnimatedShapes';

const Intro = () => {
  return (
    <Container>
        <Left>
            <Title>Adventures in creative age</Title>
            <Desc>
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.
            </Desc>
            <Info>
                <Button>START A PROJECT</Button>
                <Contact>
                    <Phone> Call Us (+94) 71 880 729 1</Phone>
                    <ContactText>For ant question or concern</ContactText>
                </Contact>
            </Info>

        </Left>
        <Right>
            <Image src={Woman}/>
        </Right>
        <AnimatedShapes/>
    </Container>
  )
}

export default Intro


const Container = styled.div`
    margin-top: 50px;
    height: calc(100vh - 200px);
    display: flex;
    padding: 20px;

    @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`
const Contact = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 480px) {
    margin-top: 40px;
  }
`
const Phone = styled.span
`   
    font-weight: bold;
    color: #f0667d;
`
const Image = styled.img
`   
    width: 100%;
`
const ContactText = styled.span
`
    color: gray;
    margin-top: 5px;
`



const Title = styled.h1`
    font-size: 60px;
    width: 60%;

    @media only screen and (max-width: 480px) {
    width: 80%;
    font-size: 50px;
  }
`
const Info = styled.div`
    display: flex;
    width: 60%;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    @media only screen and (max-width: 480px) {
    width: 90%;
    flex-direction: column;
  }

`
const Button = styled.button`
    padding: 15px;
    background-color: darkblue;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    border: none;
    letter-spacing: 2px;
    cursor: pointer;

`
const Desc = styled.p`
    font-size: 20px;
    width: 60%;
    margin-top: 20px;

    @media only screen and (max-width: 480px) {
    width: 80%;
  }
`

const Left = styled.div`

    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`
const Right = styled.div`

    width: 40%;

    @media only screen and (max-width: 480px) {
    display: none;
  }
`

