import styled from "styled-components";
import { Avatar } from "@material-ui/core";

import { DonutLarge, Chat, MoreVert } from "@material-ui/icons";

const Container = styled.div`
  background-color: #2a2f32;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 59px;
  padding: 10px 16px;
  box-sizing: border-box;
`;

const Left = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  flex: none;
  display: flex;
  align-items: center;
`;

const RightItems = styled.div`
  margin-left: 10px;
  cursor: pointer;
  color: #b1b3b5;
  padding: 8px;
  flex: none;
  height: 100%;
`;

function LeftHeader() {
  return (
    <Container>
      <Left>
        <Avatar />
      </Left>
      <Right>
        <RightItems>
          <DonutLarge />
        </RightItems>
        <RightItems>
          <Chat />
        </RightItems>
        <RightItems>
          <MoreVert />
        </RightItems>
      </Right>
    </Container>
  );
}

export default LeftHeader;
