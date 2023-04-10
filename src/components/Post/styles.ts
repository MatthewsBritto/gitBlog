import styled from "styled-components";


export const PostContainer = styled.div`

   width:100%;
   min-height: 70vh;
   display: flex;
   align-items: center;
   flex-direction: column; 
   background-color: rgb(7, 20, 34);

`


export const TitleContainer = styled.div`

    /* min-width:35rem; */
    width: 54.5rem;
    background-color: rgb(11, 27, 43);
    margin: -6rem auto 0px;
    padding: 1rem;
    border-radius: 8px;
   height: 13.25rem;
    color: white;
   font-family:'nunito';

    h1,h3{
      padding: .2rem 1rem;   
    }
`

export const TextContainer = styled.div`

   min-width:35rem;  
   max-width: 54.5rem;
   margin-top:5rem;
   color: white;
   padding: 1rem;

   height: auto;
   
    p{
      font-family:'nunito';
      font-size:1.5rem;
      line-height:2rem;
      font-weight:100;
    }
`

export const Infos = styled.ul`

   width: 55%;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   margin:2rem 0 0 1rem;

   li{
      list-style:none;
      display: flex;
      align-items: center;
      margin-right:2rem;
      opacity:.5;

      span{
         margin-right:.5rem;
      }
      
   }

`

export const Links = styled.ul`

   width:100%;
   display: flex;
   color: ${props => props.theme.blue};
   justify-content: space-between;
   align-items: center;
   padding: 1rem;   
   
   li{
      list-style:none;
      font-family:'nunito';
      cursor: pointer;
   }
`
