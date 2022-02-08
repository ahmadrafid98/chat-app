import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { MoreVert, Search } from "@material-ui/icons";

const Container = styled.div`
  background-color: #2a2f32;
  height: 59px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 10px 16px;
  align-items: center;
`;

const Icon = styled.div`
  padding: 8px;
  color: #b1b3b5;
`;

const Name = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
`;

const Status = styled.span`
  color: #595c5f;
  font-size: 13px;
  min-height: 20px;
  line-height: 20px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  padding-right: 15px;
`;

const Middle = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: #b1b3b5;
`;

const Right = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
`;

function RightHeader() {
  return (
    <Container>
      <Left>
        <Avatar />
      </Left>
      <Middle>
        <Name>Ahmad Rafid Rizqullah</Name>
        <Status>Online</Status>
      </Middle>
      <Right>
        <Icon>
          <Search />
        </Icon>
        <Icon>
          <MoreVert />
        </Icon>
      </Right>
    </Container>
  );
}

export default RightHeader;
