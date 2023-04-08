import styled from "styled-components"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import OurWorks from "./components/OurWorks"
import WhoWeAre from "./components/WhoWeAre"

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  color: white;
  background: url('./img/bg.jpeg');
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }

`

function App() {

  return (
    <Container>
      <Hero />
      <WhoWeAre />
      <OurWorks />
      <Contact />
    </Container>
  )
}

export default App
