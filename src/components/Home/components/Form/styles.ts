import styled from "styled-components";


export const FormContainer = styled.form`

   width: 55rem;
   margin-top: 6rem;
   position: relative;
   right: 15px;

`


export const InputContainer = styled.div`

   width: 55rem;
   
   
   div{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: 'nunito';
      color: white;
      span{
         color: ${p => p.theme["base-span"]};
      }
   }

   input{
      width: 100%;
      margin-top: 1rem;
      padding: 1rem;
      border-radius: 8px;
      border: none;
      background-color: ${props=> props.theme["base-input"]};
      color: white;
   }

`

export const CardsContainer = styled.div`

   position: relative;
   width: 100%;
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 1rem;
   margin-top: 2rem;

`

