import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
}

.max-center{
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
}

body{
    background-color: #090A0E;
    color: white;
}

`;

export default GlobalStyle;