import React, {useState} from 'react';
import styled from "styled-components";
import logo from '/images/logo.svg'
import ThemeSwitcher from "./UI/ThemeSwitcher";
import arrow from '/images/icon-arrow-down.svg'

const Header = () => {

    const [isFonts, setFonts] = useState(false)


    return (
        <HeaderContainer>
            <Logo/>
            <Controls>
                <Fonts onClick={() => setFonts(!isFonts)}>SansSerif</Fonts>
                {isFonts ?
                    <FontsList>
                        <Font>Serif</Font>
                        <Font>SansSerif</Font>
                        <Font>Monospace</Font>
                    </FontsList>
                :
                    ''
                }
                <Divider/>
                <ThemeSwitcher/>
            </Controls>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: sans-serif;
  font-weight: 700;
  
`
const Logo = styled.div`
  background-color: transparent;
  color: var(--switcher-color);
  font-weight: 700;

  &::before {
    content: url(${logo});
  }

`
const Controls = styled.div`
  width: 38%;
  display: flex;
  justify-content: space-between;
  height: 20px;
`
const Fonts = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: var(--color-text);
  font-family: sans-serif;
  font-weight: 700;
  font-size: 16px;
  ::after {
    content: url(${arrow});
    position: relative;
    left: 13px;
  }

`
const FontsList = styled.ul`
  color: var(--color-text);
  list-style: none;
  position: absolute;
  top: 65px;
  border-radius: 10px;
  padding: 5px 15px;
  box-shadow: 0 15px 40px -15px  var(--switcher-color);
  background-color: var(--box-bg);
 
`

const Font = styled.li`
  border: none;
  padding: 5px;
  cursor: pointer;

`

const Divider = styled.div`
  width: 1px;
  height: 25px;
  background-color: rgb(233 233 233);
  margin-left: 10px;
`

export default Header;