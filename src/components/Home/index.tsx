import { Background, HomeContainer, ListIcons, ProfileContainer, TextContainer, TitleContainer } from "./styles";
import { FaGithub } from 'react-icons/fa'



export function Home(){
   return (
      <Background>
         <HomeContainer>
            
            <ProfileContainer>

               <img src={"https://api.github.com/users/MatthewsBritto"} />

               <TextContainer>

                  <TitleContainer>
                     <h2>Matthews Britto</h2> 
                     <a href="#">Github</a>
                  </TitleContainer>
                  
                  <p>Labore quaerat quam nihil sed minima saepe tempore velit eveniet illum? Voluptas consectetur possimus obcaecati repellendus nostrum ad esse fugiat error!</p>
                  
                  <ListIcons>
                     <li>
                        <FaGithub size={20}/>
                        <p>testadamente.</p>
                     </li>
                     <li>
                        <FaGithub size={20}/>
                        <p>testadamente.</p>
                     </li>
                     <li>
                        <FaGithub size={20}/>
                        <p>testadamente.</p>
                     </li>
                  </ListIcons>
               </TextContainer>

            </ProfileContainer>

         </HomeContainer>
      </Background>
   )
}