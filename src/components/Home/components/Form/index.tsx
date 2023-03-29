import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiPost } from "../../../../lib/axios";
import { FormContainer, InputContainer,CardsContainer,Card } from "./styles";


interface PostsProps{
   html_url:string;
   title:string;
   body:string;
   comments:string;
   created_at: string;
}



export function Form(){

   const [post,setPost] = useState<PostsProps[]>([])

   const navigate = useNavigate()

   function teste(){
      navigate('/post')
   }

   async function getDataApiPosts(){
      const res = await apiPost.get('gitblog')
      .then(res => res.data)
      .catch(err => console.log(err))

      const listPosts = res.items

      const newListPosts = listPosts.map((item:any) => {
         return {
            title : item.title,
            html_url: item.html_url,
            body: item.body,
            comments: item.comments,
            created_at: item.created_at
         }
      })

      setPost(newListPosts)
   }

   useEffect(()=>{
      getDataApiPosts();
   },[])
   

   return(
      <FormContainer>
         <InputContainer>
            <div>
               <h3>Publicações</h3>
               <span>6 publicações</span>
            </div>
         
            <input type="text" placeholder="Buscar conteúdo"/>
         </InputContainer>

         <CardsContainer>

            {post && post.map( item => {
               return (
                  <Card onClick={() =>{getDataApiPosts()}}>               
                        <div>
                           <h3>{item.title}</h3>
                           <span>{item.created_at}</span>
                        </div>
                     
                        <p>{item.body}</p>
                  </Card>
                  
               )      
            })}

           </CardsContainer>

      </FormContainer>
   )
}