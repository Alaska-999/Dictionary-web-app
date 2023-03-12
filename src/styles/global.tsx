import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`

  * {
    /* Typography */
    --fz: 16px;

    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }


  body {
    //colors
    --white: rgb(255, 254, 254);
    --soft-purple: rgb(233, 208, 250);
    --purple: rgb(164, 68, 240);
    --dark-gray: rgb(31, 30, 31);
    --gray: rgb(117 117 117);
    --light-gray: rgb(244, 244, 245);
    --black: rgb(4, 5, 5);
    
    background-color: var(--bg-color);
  }
  
  body[data-theme = 'light'] {
    --bg-color: var(--white);
    --color-text: var(--dark-gray);
    --box-bg: var(--white);
    --switcher-color: var(--gray);
    --switcher-transition: translate(0);
    --input-color: var(--light-gray);
    --placeholder: RGB(200, 205, 210)
  }  
  body[data-theme = 'dark'] {
    --bg-color: var(--black);
    --color-text: var(--white);
    --box-bg: var(--dark-gray);
    --switcher-color: var(--purple);
    --switcher-button-color: var(--white);
    --switcher-transition: translate(15px);
    --input-color: var(--dark-gray);
    --placeholder: RGB(87, 87, 87)

  }

`

export default GlobalStyle