import React from 'react'
import styled from "styled-components";

const AnimatedShapes = () => {
  return (
    <>
        <Square/>
        <Circle/>
        <Rectangle/>
    </>

  )
}

export default AnimatedShapes


const Square = styled.div`
    width: 60px;
    height: 60px;
    background-color: #42a5f2;
    position: absolute;
    top: 150px;
    left: -60px;
    z-index: -1;
    opacity: 20%;
    animation: square 25s linear alternate infinite;

    @keyframes square {
        to{
            transform: translate(100vw, 80vh);
        }
    }
`
const Circle = styled.div`
    width: 100px;
    height: 100px;
    background-color: #f242ba;
    position: absolute;
    top: 80vh;
    left: -100px;
    z-index: -1;
    opacity: 20%;
    border-radius: 50%;
    animation: circle 32s linear alternate infinite;

    @keyframes circle {
        to{
            transform: translate(80vw, -80vh);
        }
    }
`

const Rectangle = styled.div`
    width: 100px;
    height: 50px;
    background-color: #42f2ac;
    position: absolute;
    top: 30vh;
    left: -100px;
    z-index: -1;
    opacity: 20%;
    animation: rectangle 22s linear alternate infinite;

    @keyframes rectangle {
        to{
            transform: translate(80vw, 150vh);
        }
    }
`