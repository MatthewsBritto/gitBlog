import { Background,HomeContainer } from "./styles";
import { Profile } from "./components/Profile";
import { Form } from "./components/Form";
import { useEffect, useState } from "react";
import { apiUser } from "../../lib/axios";

export interface UserProps {
   name: string;
   id:number;
   login:string;
   bio:string;
   followers:number;
   url:string;
   avatar:string;
}

export function Home(){

  

   const [user,setUser] = useState<UserProps>({} as UserProps)


   async function getDataApi() {

      const res = await apiUser.get('MatthewsBritto');
      
      const resData = res.data;

      const newUser = {
         name : resData.name,
         id: resData.id,
         login: resData.login,
         bio: resData.bio,
         followers: resData.followers,
         url: resData.html_url,
         avatar:resData.avatar_url
      }

      if(newUser){
         setUser(newUser);
      }
      
   }

   useEffect(() => {
      getDataApi();
   },[])
  
   console.log(user)
   return (
      <Background>
         
         <HomeContainer>
            <Profile user={user} />
            <Form />
         </HomeContainer>
      </Background>
   )
}