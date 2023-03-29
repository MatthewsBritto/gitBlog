import {  ListIcons, ProfileContainer, TextContainer, TitleContainer } from "./styles";
import { FaGithub, FaBuilding, FaUserFriends } from 'react-icons/fa'
import { UserProps } from "../..";


interface ProfileProps {
   user: UserProps;
}

export function Profile({user}:ProfileProps){

   
   return (            
            <ProfileContainer>

               <img src={user.avatar} />

               <TextContainer>

                  <TitleContainer>
                     <h2>{user.name}</h2> 
                     <a href={user.url}>Github</a>
                  </TitleContainer>
                  
                  <p>{user.bio}</p>
                  
                  <ListIcons>
                     <li>
                        <span><FaGithub size={20}/></span>
                        <p>{user.login}</p>
                     </li>
                     <li>
                        <span><FaBuilding size={20}/></span>
                        <p>org</p>
                     </li>
                     <li>
                        <span><FaUserFriends size={20}/></span>
                        <p>{user.followers} seguidores</p>
                     </li>
                  </ListIcons>
               </TextContainer>

            </ProfileContainer>

   )
}