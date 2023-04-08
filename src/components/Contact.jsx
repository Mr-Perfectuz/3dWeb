import React, { useRef, useState } from 'react';
import styled from 'styled-components'
import emailjs from '@emailjs/browser';
// import Map from './Map'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 768px){
    justify-content: center;
  }
`
const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px){
    display: none;
  }
`
const Form = styled.form`
display: flex;
flex-direction: column;
width: 500px;
gap: 20px;

@media only screen and (max-width: 768px){
    width: 300px;
  }
`
const Title = styled.h1`
  font-weight: 200;
`
const Input = styled.input`
  padding: 20px;
  background-color: #f3f3f3;
  border: none;
  border-radius: 5px;
`
const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #f3f3f3;


`
const Button = styled.button`
  border: none;
  background-color: #da3ea2;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 20px;
  border-radius: 5px;
  :hover{
    opacity: 0.8;
  }
  :active{
    opacity: 0.6;
  }
`




const Contact = () => {

  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_xjvlbbj',
        'template_pr9rg2l',
        ref.current,
        'bhE1yZzcCGxLYUdq7'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true)
        },
        (error) => {
          console.log(error.text);
          setSuccess(false)
        });
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder='Name' name='name' />
            <Input placeholder='Email' name='email' />
            <TextArea placeholder='Write your message' name='message' rows={10} />
            <Button type='submit'>Send</Button>
            {success &&
              "Your message has been sent. We'll get back to you soon:"}
          </Form>
        </Left>
        <Right>
          {/* <Map /> */}
        </Right>
      </Container>
    </Section>
  )
}

export default Contact