import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

*,*::before,*::after{
    padding:0;
    margin:0;
    box-sizing:border-box;
    font-family: 'Lato', sans-serif;
}
`;

export default GlobalStyle;
