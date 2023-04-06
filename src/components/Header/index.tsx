import { HeaderContainer } from "./styles";
import effect from '../../assets/effect.png';
import Logo from '../../assets/logo.png'
import { Navigate } from "react-router-dom";

export function Header() {
   function Teste(){
      <Navigate to={'/'} />
   }

   return (
      <HeaderContainer>
         <img src={effect} />
         <img src={Logo} onClick={ () => Teste()}/>
         <img src={effect} />
      </HeaderContainer>
   )
}