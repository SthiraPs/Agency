import styled, {css} from 'styled-components';
import Contacts from './components/Contacts';
import Features from './components/Features';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Prices from './components/Prices';
import Services from './components/Services';


const Container = styled.div`
  height :100vh;
  overflow: hidden;
  position: relative;
`

const Shape = css`
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    opacity: 60%;

`

const IntroShape = styled.div`
    clip-path: polygon(100% 0, 100% 45%, 100% 100%, 53% 100%, 69% 0);
    background-color: pink;
    ${Shape}
`

const FeaeaturesShape = styled.div`
    clip-path: polygon(0 0, 0 42%, 0 100%, 35% 100%, 53% 0);
    background-color: pink;
    ${Shape}
`
const ServiceShape = styled.div`
    clip-path: polygon(0 0, 35% 0, 50% 100%, 0% 100%);
    background-color: pink;
    ${Shape}
`


function App() {

  const smallScreen = window.screen.width <= 480 ? true : false;

  return (
    <>
      <Container>
        <Navbar/>
        <Intro/>
        <IntroShape/>
      </Container>

      <Container>
        <Features/>
        <FeaeaturesShape/>
      </Container>
    
      <Container>
        <Services/>
        {!smallScreen && <ServiceShape/>}
      </Container>

      <Container>
        <Prices/>
      </Container>

      <Container>
        <Contacts/>
        <Footer/>
      </Container>

    </>
  );
}

export default App;
