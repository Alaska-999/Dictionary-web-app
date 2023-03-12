import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import moonSvg from '/public/images/icon-moon.svg'

const ThemeSwitcher = () => {

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])
    return (
        <Wrapper>
            <Container onClick={toggleTheme} >
                <Switcher/>
            </Container>
            <Icon/>
        </Wrapper>
    );
};


const Wrapper = styled.div`
    display: flex;
`
const Container = styled.button`
  width: 35px;
  padding: 2px;
  border-radius: 20px;
  background-color: var(--switcher-color);
  border: none;
`

const Switcher = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 50px;
  background-color: var(--white);
  transition: all ease 0.2s;
  transform: var(--switcher-transition) ;
`
const Icon = styled.div`
  background-color: transparent;
  font-weight: 700;
  margin-right: 20px;

  &::before {
    content: url(${moonSvg});
    position: relative;
    left: 15px;
    stroke: var(--color-text);
    color: var(--switcher-color);
  }
`


export default ThemeSwitcher;