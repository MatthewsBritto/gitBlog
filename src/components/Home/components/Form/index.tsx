import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiPost } from "../../../../lib/axios";
import { FormContainer, InputContainer,CardsContainer} from "./styles";
import { Card } from "../Card";
import { useForm } from 'react-hook-form'
import axios from "axios";



export interface PostsProps{
   html_url:string;
   title:string;
   body:string;
   comments:string;
   created_at: string;
   id:number;
}



export function Form(){

   const [post,setPost] = useState<PostsProps[]>([])

   const { register ,handleSubmit ,watch} = useForm()

   const [query,setQuery] = useState('')

   let teste:string = watch('query');

   const navigate = useNavigate()

   async function getDataApiPosts(){
       

      const res = await apiPost.get(`issues?q=${query}repo:matthewsbritto/gitblog`)
      .then(res => res.data)
      .catch(err => console.log(err))

      const listPosts = res.items

      const newListPosts = listPosts.map((item:any) => {
         

         return {
            title : item.title,
            html_url: item.html_url,
            body: item.body,
            comments: item.comments,
            created_at: item.created_at,
            id:item.id
         }
      })
      setPost(newListPosts)

   }

   const publishs = post.length

   useEffect(()=>{
      getDataApiPosts();
      
   },[query])


   return(
      <FormContainer >
         <InputContainer>
            <div>
               <h3>Publicações</h3>
               <span>{publishs} publicações</span>
            </div>
         
            <input 
            type="text" 
            placeholder="Buscar conteúdo" 
            {...register("query")} 
            onChange={ (event) => setQuery(event.target.value) }
            />
         </InputContainer>

         <CardsContainer>

            {post && post.map( item => {
               return (
                  <Card 
                     id={item.id} 
                     title={item.title} 
                     body={item.body}
                     created_at={item.created_at}
                     comments={item.comments}
                     html_url={item.html_url}   
                  />
                  
               )      
            })}

           </CardsContainer>

      </FormContainer>
   )
}