import styled from "styled-components";
import Chat from "./Chat";
import { ExpandMore } from "@material-ui/icons";

const Container = styled.div`
  flex-grow: 1;
  padding: 0px 85px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #131c21 transparent;
`;

const EndOfChat = styled.div`
  margin-bottom: 10px;
`;

const ButtonScrollToBottom = styled.button`
  color: #b1b3b5;
  border: none;
  background-color: #131c21;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
  position: fixed;
  bottom: 80px;
  right: 25px;
  cursor: pointer;
`;

function ChatScreen() {
  return (
    <Container>
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <EndOfChat />
      <ButtonScrollToBottom>
        <ExpandMore />
      </ButtonScrollToBottom>
    </Container>
  );
}

export default ChatScreen;
