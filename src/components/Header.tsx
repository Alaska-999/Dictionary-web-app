import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import logo from '/images/logo.svg'
import ThemeSwitcher from "./UI/ThemeSwitcher";
import arrow from '/images/icon-arrow-down.svg'

const Header = () => {

    const [isFonts, setFonts] = useState(false)

    const [font, setFont] = useState('Serif')

    useEffect(() => {
        document.body.setAttribute('data-font', font)
    }, [font])

    return (
        <HeaderContainer>
            <Logo/>
            <Controls>
                <Fonts onClick={() => setFonts(!isFonts)}>{font}</Fonts>
                {isFonts ?
                    <FontsList>
                        <Font onClick={() => setFont('Serif')}>Serif</Font>
                        <Font onClick={() => setFont('SansSerif')}>SansSerif</Font>
                        <Font onClick={() => setFont('Monospace')}>Monospace</Font>
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
  font-family: var(--family);
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
  
  @media (max-width: 470px) {
    width: 50%;
  }
  
  @media (max-width: 360px) {
    width: 65%;
  } 
  @media (max-width: 270px) {
    width: 75%;
  }
`
const Fonts = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: var(--color-text);
  font-family: var(--family);
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