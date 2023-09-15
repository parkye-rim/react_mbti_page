import styled from "styled-components";
import { GlobalStyle } from "./components/GlobalStyle";
import Start from "./pages/Start";
import Mbti from "./pages/Mbti";
import { useSelector } from "react-redux";
import Show from "./pages/Show";
const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 0 35px;
  margin: auto;
  text-align: center;
`;

function App() {
  const page = useSelector((state) => state.mbti.page);
  return (
    <>
      <GlobalStyle />
      <Main>
        {page === 0 ? <Start /> : page < 5 ? <Mbti /> : <Show></Show>}
      </Main>
    </>
  );
}

export default App;
