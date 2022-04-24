import React, { useState } from 'react'
import styled from "styled-components";
import Woman from '../img/woman3.png';
import Play from '../img/play.png';
import MiniCard from './MiniCard';
import Clip from '../img/clip.mp4';

const Services = () => {

    const [isOpen, setIsOpen] = useState(false)
    const smallScreen = window.screen.width <= 480 ? true : false;

  return (
    <Container>
        <Left>
            <Image open={isOpen} src={Woman}/>
            <Video open={isOpen} autoPlay loop controls src={Clip}/>
        </Left>
        <Right>
            <Wrapper>
                <Title> To your door steps...</Title>
                <Desc>In publishing and graphic design, Lorem ipsum is a placeholder text commonly us.</Desc>

                <CardContainer>
                    <MiniCard/>
                    <MiniCard/>

                    <MiniCard/>

                </CardContainer>

                <Button onClick={()=>{
                    setIsOpen(!isOpen)
                    console.log(isOpen)
                    }}>
                    <Icon src={Play}></Icon>
                    How it works...
                </Button>
            </Wrapper>
        </Right>

        {smallScreen && isOpen && (
            <Model>
                <Video open={isOpen} autoPlay loop controls src={Clip}/>

            </Model>
        
        )}
    </Container>
  )
}

export default Services

const Container = styled.div`

    display: flex;
    height: 100%;

    @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`

const CardContainer = styled.div`

    display: flex;
    justify-content: space-between;
    margin-top: 50px;

`
const Button = styled.button`
    padding: 15px;
    width: 200px;
    background-color: darkblue;
    color: white;
    border-radius: 10px;
    font-size: 20px;
    border: none;
    cursor: pointer;
    margin-top: 40px;
    display: flex;
    align-items: center;
`
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 480px) {
    padding: 30px;
  }
`;

const Left = styled.div`

    width: 50%;

    @media only screen and (max-width: 480px) {
    display: none;
  }

`
const Right = styled.div`

    width: 50%;

    @media only screen and (max-width: 480px) {
    width: 100%;
  }

`

const Title = styled.h1`
    font-size: 60px;
    width: 60%;

    @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 50px;
  }
`
const Desc = styled.p`
    font-size: 20px;
    width: 60%;
    color: #555;

    @media only screen and (max-width: 480px) {
    width: 80%;
  }
`

const Image = styled.img
`   
    width: 100%;
    height: 100%;
    display: ${(props) => props.open &&  "none"};

`

const Video = styled.video
`   
    height: 300px;
    display: ${(props) => !props.open &&  "none"};
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;

    
    @media only screen and (max-width: 480px) {
        width: 100%;
      }
`

const Icon = styled.img
`   
    width: 20px;
    margin-right: 10px;
`

const Model = styled.div`

    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;



`