import styled from "styled-components";


export const CardItem = styled.div`

   background-color: ${props=> props.theme["base-post"]};
   height:16.25rem;
   padding:1rem;
   border-radius: 8px;
   color: white;
   font-family:'nunito',sans-serif;
   transition: transform 0.2s ease-in-out;
   border: none;
   overflow: hidden;

   div{
      margin: 1rem 0;
      display: flex;
      justify-content: space-between;
      font-weight: 700;
      align-items:end;

      h3{
         width: 70%;
         font-size:1.2rem ;
      }
      span{
         color: ${p => p.theme["base-span"]};
         font-weight: 400;
         font-size:.8rem;
      }
   }


   p {
         
         font-weight: 400;
         color: ${p => p.theme["base-span"]};
         line-height:160%;
         text-overflow:ellipsis;
         overflow:hidden;
         white-space:break-spaces;
   }

   &:hover{
      cursor: pointer;
      transform: scale(1.1);
   }
`