import styled from "styled-components";
import { Search } from "@material-ui/icons";

const Container = styled.div`
  background-color: #131c21;
  height: 49px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex: none;
`;

const InputBox = styled.div`
  width: 100%;
  margin-left: 12px;
  margin-right: 14px;
  height: 35px;
  background-color: #323739;
  padding-left: 65px;
  padding-right: 32px;
  display: flex;
  align-items: center;
  border-radius: 18px;
`;

const SearchIcon = styled(Search)`
  color: #d4d5d7;
`;

const Input = styled.input`
  width: 80%;
  color: #d4d5d7;
  border: none;
  outline: none;
  background-color: transparent;
`;

function SearchBox() {
  return (
    <Container>
      <InputBox>
        <SearchIcon />
        <Input type="text" placeholder="Search or start new chat" />
      </InputBox>
    </Container>
  );
}

export default SearchBox;
