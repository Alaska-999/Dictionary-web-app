import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import styled from "styled-components";
import Word from "./components/Word";
import Search from "./components/Search";
import {useTypedSelector} from "./hooks/useTypedSelector";
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
`

const Main = styled.main`
  margin: 40px auto 0;
 
`

export default App
