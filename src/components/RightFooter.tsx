import styled from "styled-components";
import { EmojiEmotionsTwoTone, AttachFile, Mic } from "@material-ui/icons";

const Container = styled.div`
  display: flex;
  align-items: center;
  min-height: 62px;
  min-width: 0;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  padding: 5px 10px;
  box-sizing: border-box;
  background-color: #1e2428;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Middle = styled.div`
  flex: 1;
  box-sizing: border-box;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-items: flex-end;
`;

const Icon = styled.div`
  padding: 5px 10px;
  color: #b1b3b5;
`;

const Input = styled.input`
  margin-left: 15px;
  width: 95%;
  color: #d4d5d7;
  border: none;
  outline: none;
  background-color: transparent;
`;

const InputBox = styled.div`
  width: 100%;
  margin: 5px 0px;
  min-height: 20px;
  background-color: #323739;
  padding: 9px 0px;
  display: flex;
  align-items: center;
  border-radius: 21px;
`;

function RightFooter() {
  return (
    <Container>
      <Left>
        <Icon>
          <EmojiEmotionsTwoTone />
        </Icon>
        <Icon>
          <AttachFile />
        </Icon>
      </Left>
      <Middle>
        <InputBox>
          <Input placeholder="Type a message" type="text" />
        </InputBox>
      </Middle>
      <Right>
        <Icon>
          <Mic />
        </Icon>
      </Right>
    </Container>
  );
}

export default RightFooter;
