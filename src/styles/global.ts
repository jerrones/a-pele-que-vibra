import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }
    
    :focus {
        outline: 0;
    }

    body {
        background-color: #e8e6e6;
        -webkit-font-smoothing: antialiased;
    }
`;
