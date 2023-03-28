import { HeaderContainer } from "./styles";
import effect from '../../assets/effect.png';
import Logo from '../../assets/logo.png'

export function Header() {
   return (
      <HeaderContainer>
         <img src={effect} />
         <img src={Logo} />
         <img src={effect} />
      </HeaderContainer>
   )
}