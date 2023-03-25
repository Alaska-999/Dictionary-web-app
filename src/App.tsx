import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import styled from "styled-components";
import Word from "./components/Word";
import Search from "./components/Search";
import React from "react";


function App() {
    return (
        <Container className="App">
            <GlobalStyle/>
            <Header/>
            <Main>
                <Search/>
                <Word/>
            </Main>
        </Container>
    )
}


const Container = styled.header`
  max-width: 620px;
  margin: 0 auto;
  padding: 35px 15px;
  @media (max-width: 600px) {
    padding: 20px 20px;
  }
`

const Main = styled.main`
  margin: 40px auto 0;
  @media (max-width: 600px) {
    margin: 20px auto 0;
  }
`

export default App
