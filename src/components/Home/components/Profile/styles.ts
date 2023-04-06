import styled from "styled-components"


export const ProfileContainer = styled.div`

   width:100%;
   display: flex;
   align-items: center;
   justify-content:space-between;  
         
   img {
      width: 9.25rem;
      height: 9.25rem;
      border-radius: 8px;
      margin-left: 2rem;
      /* margin: 0 auto; */
   }
`
export const TextContainer = styled.div`
   display: flex;
   flex-direction:column;
   padding: 0 .5rem;
   font-family: 'nunito';
   color: white;
   width: 75%;
   p  {
      padding: .8rem 0;
      font-size: 1rem;
      font-weight: 400;

   }
`

export const TitleContainer = styled.div`
   display:flex;
   align-items:baseline;
   justify-content: space-between;
   width: 93%;
   padding: 1rem 0;

   a {
     text-decoration:none; 
     color: ${props => props.theme.blue};
   }
   

`

export const ListIcons = styled.ul`

display: flex;
justify-content: space-between;
align-items: center;
width: 70%;
margin-top:1rem ;

   li{
      list-style: none;
      display: flex;
      line-height: 160%;
      align-items: center;
      
      

      span{
         color: ${props => props.theme["base-label"]};
         line-height: 0;
         margin-right: .5rem;
      }
   }
`