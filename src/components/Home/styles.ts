import styled from "styled-components";

export const Background = styled.div`

   width: 100%;
   background-color: ${props => props.theme["base-background"]};
   position: absolute;
   height: 69vh;
`


export const HomeContainer = styled.div`

   max-width: 54.5rem;
   background-color: ${props => props.theme["base-profile"]};
   margin: 0 auto;
   padding:1rem;
   margin-top: -6rem;
   border-radius:8px;
   height: 13.25rem;
   
`
export const ProfileContainer = styled.div`

   width:100%;
   display: flex;
   align-items: center;
   justify-content:center;  
   
      
   img {
      width: 40%;
      margin: 0 auto;
   }
`
export const TextContainer = styled.div`
   display: flex;
   flex-direction:column;
   padding: 0 .5rem;
   font-family: 'nunito';
   color: white;
   p  {

      padding: .8rem 0;
      font-size: 1rem;
      font-weight: 400;

   }
`

export const TitleContainer = styled.div`
   display:flex;
   align-items:center;
   justify-content: space-between;
   width: 93%;
   padding: 1rem 0;
   

`

export const ListIcons = styled.ul`

display: flex;
justify-content: space-between;
align-items: center;
width: 80%;

   li{
      list-style: none;
      display: flex;
      line-height: 160%;
      align-items: center;
      justify-content: space-evenly;
      width: 30%;

   }

`
