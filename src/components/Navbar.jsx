import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  display: flex;
  justify-content: center;


  @media only screen and (max-width: 768px){
    width: 100%;
  }
`

const Container = styled.div`
  width: 1400px;
  display: flex;
  margin: auto;


  @media only screen and (max-width: 768px){
    width: 100%;
    padding: 10px;
  }

`
const Link = styled.div`
`
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;


  @media only screen and (max-width: 768px){
    margin-left: auto;
  }

`

const Logo = styled.img`
  width: 200px;
  height: 200px;
  cursor: pointer;

  :hover{
    opacity: 0.8;
  }
  :active{
    opacity: 0.6;
  }
`

const List = styled.ul`
  display: flex;
  align-items: center;
  margin-right: auto;
  gap: 20px;


  @media only screen and (max-width: 768px){
    display: none;
  }
`
const ListItem = styled.li`
  list-style: none;
  cursor: pointer;


  :hover{
    opacity: 0.8;
    color: #48dd48;
  }
  :active{
    opacity: 0.6;
  }
`

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
  `

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 10px;

  :hover{
    opacity: 0.8;
  }
  :active{
    opacity: 0.6;
  }
`

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Link></Link>
        <Logo src='./img/logo.png' />
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Studio</ListItem>
          <ListItem>Works</ListItem>
          <ListItem>Contact</ListItem>
        </List>
        <Icons>
          <Icon src="./img/search.png" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  )
}

export default Navbar