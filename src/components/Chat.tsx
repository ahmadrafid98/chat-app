import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  box-sizing: border-box;
  border-radius: 8px;
  margin-top: 10px;
  max-width: 45%;
  padding: 6px 7px 8px 9px;

  margin-left: auto; //sender
  background-color: #131c21; //sender

  /* background-color: #2a2f32; // reciever */
`;

const ChatText = styled.p`
  margin: 0px;
  text-align: right; // sender
  /* text-align: left; // reciever */
  color: #d7d8d8;
  font-size: 14.2px;
`;

const ChatTime = styled.p`
  font-size: 12px;
  margin: 0px;
  text-align: left; // sender
  /* text-align: right; // reciever */
  color: #909396;
`;

function Chat() {
  return (
    <Container>
      <ChatText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
        adipisci? Illo distinctio voluptatibus perspiciatis, ratione ab ex harum
        id modi animi architecto fugit et impedit illum similique odit aliquid
        commodi.
      </ChatText>
      <ChatTime>07:00</ChatTime>
    </Container>
  );
}

export default Chat;
