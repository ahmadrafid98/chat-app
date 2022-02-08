import styled from "styled-components";
import ContactBox from "./ContactBox";

const Container = styled.div`
  background-color: #131c21;
  height: 100%;
  border-top: 1px solid #323739;
  flex-grow: 1;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #323739 #131c21;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
`;

function Contact() {
  return (
    <Container>
      <ContactList>
        <ContactBox />
        <ContactBox />
      </ContactList>
    </Container>
  );
}

export default Contact;
