import styled from "styled-components";
import { Avatar } from "@material-ui/core";

const Container = styled.div`
  display: flex;
  align-items: stretch;
  background-color: #131c21;
  height: 72px;
  width: 100%;
  cursor: pointer;
  :hover {
    background-color: #2d3134;
  }
`;

const ContactAvatar = styled.div`
  padding: 0 15px 0 13px;
  display: flex;
  align-items: center;
`;

const ContactDetail = styled.div`
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  border-bottom: 1px solid #323739;
`;

const ContactName = styled.div`
  color: #d7d8d8;
  flex: 1;
  align-items: flex-end;
  font-weight: 400;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const ContactContent = styled.div`
  color: #595c5f;
  flex: 1;
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: flex-start;

  & span {
    font-size: 14px;
  }
`;

function ContactBox() {
  return (
    <Container>
      <ContactAvatar>
        <Avatar sizes="40px" />
      </ContactAvatar>
      <ContactDetail>
        <ContactName>
          <span>Ahmad Rafid Rizqullah</span>
        </ContactName>
        <ContactContent>
          <span>Hello</span>
        </ContactContent>
      </ContactDetail>
    </Container>
  );
}

export default ContactBox;
