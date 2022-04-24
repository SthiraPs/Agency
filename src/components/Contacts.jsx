import React from 'react'
import styled from 'styled-components';
import Map from '../img/map.png';
import Phone from '../img/phone.png';
import Send from '../img/send.png';

const Contacts = () => {
  return (
    <Container>
        <Wrapper>
            <FormContainer>
                <Title>
                    Question? <br></br>
                    Lest get in touch..
                </Title>
                <Form>
                    <LeftForm>
                        <Input placeholder='Name'></Input>
                        <Input placeholder='Email'></Input>

                        <Input placeholder='Subject'></Input>

                    </LeftForm>
                    <RightForm>
                        <TextArea placeholder='Your message'></TextArea>
                        <Button>Send</Button>
                    </RightForm>
                </Form>

            </FormContainer>

            <AddressContainer>
                <AddressItem>
                    <Icon src={Map}></Icon>
                    <Text> No: 45, ABC rd, New YOrk</Text>

                </AddressItem>

                <AddressItem>
                    <Icon src={Phone}></Icon>
                    <Text> (+94) 292 421 222</Text>

                </AddressItem>


                <AddressItem>
                    <Icon src={Send}></Icon>
                    <Text> agency@gmail.com</Text>

                </AddressItem>
            </AddressContainer>
        </Wrapper>
    </Container>
  )
}

export default Contacts

const Container = styled.div`
    background: url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123freevectors.com%2Fgreen-and-white-texture-background-160922%2F&psig=AOvVaw3jPEud0bNb_p6eXtvyaIQX&ust=1650818134596000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCODDkvnOqvcCFQAAAAAdAAAAABAg");
    height: 90%;

    

    

`
const Wrapper = styled.div`
    display: flex;
    padding: 20px;
    height: 100%;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 480px) {
    flex-direction: column;

    
  }
`
const FormContainer = styled.div`
    width: 60%;

    
    @media only screen and (max-width: 480px) {
     width:100%;
    }
`
const AddressContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: left;

    @media only screen and (max-width: 480px) {
    width: 80%;
    margin-top: 40px;
  }
`
const Form = styled.form`

    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;

    
    @media only screen and (max-width: 480px) {
     flex-direction: column;
    }

`
const LeftForm = styled.form`

    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    
    @media only screen and (max-width: 480px) {
     width: 80%;
     margin-right: 0;
    }

`
const RightForm = styled.form`

    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    
    @media only screen and (max-width: 480px) {
     width: 80%;
     margin-right: 0px;
     
    }

`

const Input = styled.input`

    width: 200px;
    padding: 20px;
    border-radius: 5px;

    
    @media only screen and (max-width: 480px) {
    
        padding: 10px;
        margin-top: 10px;
        width: 300px;
    }
`

const TextArea = styled.textarea`

    width: 200px;
    height: 60%;
    padding: 20px;
    border-radius: 5px;

    
    @media only screen and (max-width: 480px) {
    
    padding: 10px;
    margin-top: 15px;
    width: 300px;

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
    margin-top: 10px;

    @media only screen and (max-width: 480px) {
    
    padding: 10px;
    font-size: 14;
    width: 320px;

}

`

const Title = styled.h1`

    margin: 50px;
    margin-left: 180px;
    margin-top: 0;

    
    @media only screen and (max-width: 480px) {
        font-size: 40px;
        margin-left: 0;
        margin: 20px;
        margin-bottom: 50px;
    }
`

const AddressItem = styled.div`

    display: flex;
    align-items: center;
    margin: 20px;
    
    @media only screen and (max-width: 480px) {
        margin: 5px;
    }

 
`

const Icon = styled.img`

    width: 20px;
    margin-right: 20px;
    
    @media only screen and (max-width: 480px) {
    width: 15px;
    margin-right: 15px;
    }
`

const Text = styled.span`

    font-size: 20px;
    margin-right: 50px;
    
    @media only screen and (max-width: 480px) {
    font-size: 14px;
    margin-right: 0;
    margin-top: 0px;
    }
`