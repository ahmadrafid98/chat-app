import styled from "styled-components";
import ChatScreen from "./components/ChatScreen";
import Contact from "./components/Contacts";
import LeftHeader from "./components/LeftHeader";
import RightFooter from "./components/RightFooter";
import RightHeader from "./components/RightHeader";
import SearchBox from "./components/SearchBox";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  min-height: 500px;
  min-width: 600px;
`;

const Left = styled.div`
  border-right: 1px solid #323739;
  flex: 30%;
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: 70%;
  background-color: #323739;
`;

function App() {
  return (
    <Container>
      <Left>
        <LeftHeader />
        <SearchBox />
        <Contact />
      </Left>
      <Right>
        <RightHeader />
        <ChatScreen />
        <RightFooter />
      </Right>
    </Container>
  );
}

export default App;
