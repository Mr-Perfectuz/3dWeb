import React, { useState } from 'react'
import styled from 'styled-components'
import Development from './Development'
import ProductDesign from './ProductDesign'
import WebDesign from './WebDesign'


const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media"
]

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
`
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;


  @media only screen and (max-width: 768px){
    width: 100%;
    flex-direction: column;
  }
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;


  @media only screen and (max-width: 768px){
   padding: 20px;
   justify-content: center;
  }
`
const Right = styled.div`
  flex: 1;
  position: relative;
`
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer  ;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;


  @media only screen and (max-width: 768px){
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after{
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover{
    ::after{
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to{
          width: 100%;
        }
      }

    }
  }
`
const Desc = styled.div`
   width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  font-size: 14px;
  font-weight: 300;
  color: black;
  bottom: 170px;
  right: 1px;

  @media only screen and (max-width: 768px){
    top: 0;
    bottom: 300px;
    right: 0;
    left: 0;
    margin: auto;
  }

`

const OutWorks = () => {
  const [work, setWork] = useState("Web Design")
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item => (
              <ListItem text={item} key={item} onClick={() => setWork(item)}>{item} </ListItem>
            )))}
          </List>
        </Left>

        <Right>
          <Desc>We design products with a strong focus on both world class design and ensuring your product is a market success</Desc>
          {work === "Web Design" ?
            (<WebDesign />)
            : work === "Development"
              ? (<Development />)
              : (<ProductDesign />)}


        </Right>
      </Container>
    </Section>
  )
}

export default OutWorks