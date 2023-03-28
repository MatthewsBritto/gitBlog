import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

*{
   margin:0;
   padding: 0;
   box-sizing: border-box;
}

   :focus{
      outline: 0;
      border:1px solid ${props => props.theme.blue}
   }
   body{

   }

`