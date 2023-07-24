import { styled } from "styled-components";
import ContactForm from "./components/ContactForm";
import ContactFormTwo from "./components/ContactFormTwo";

function App() {
  return (
    <Container>
      <ContactForm />
      <ContactFormTwo />
    </Container>
  );
}

export default App;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 200vh;
`

