import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiPost } from "../../../../lib/axios";
import { FormContainer, InputContainer,CardsContainer} from "./styles";
import { Card } from "../Card";
import { useForm } from 'react-hook-form'

export interface PostsProps{
   url:string;
   title:string;
   body:string;
   comments:string;
   created_at: string;
   id:number;
   index:number;
}



export function Form(){

   const [post,setPost] = useState<PostsProps[]>([])

   const { register, watch} = useForm()

   const [query,setQuery] = useState('')

   const [initialPosts, setInitialPosts] = useState<PostsProps[]>([])

   const navigate = useNavigate()

   async function getDataApiPosts(){
       

      const res = await apiPost.get(`issues?q=${query}repo:matthewsbritto/gitblog`)
      .then(res => res.data)
      .catch(err => console.log(err))


      const newListPosts = res.items.map((item:any) => {
         
         return {
            title : item.title,
            url: item.url,
            body: item.body,
            comments: item.comments,
            created_at: item.created_at,
            id:item.id,
            index:item.number
         }
      })

      setInitialPosts(newListPosts)
      setPost(newListPosts)

   }

   function filterPosts(word:string) {
      const filter = initialPosts.filter(
         post => post.body.toLowerCase().includes(word.toLowerCase()) || post.title.toLowerCase().includes(word.toLowerCase())
      )

      if (word.length === 0) {
         setPost(initialPosts)
      } else {

         setPost(filter)
      }
   }

   const publishs = post.length

   useEffect(()=> {
      getDataApiPosts();
   },[])


   return(
      <FormContainer >
         <InputContainer>
            <div>
               <h3>Publicações</h3>
               <span>{publishs} publicações</span>
            </div>
         
            <input 
            type="text" 
            placeholder="Buscar conteúdo ..." 
            {...register("query")} 
            onChange={ (event) => filterPosts(event.target.value) }
            
            />
         </InputContainer>

         <CardsContainer>

            {post && post.map( item => {
               return (
                  <Card key={item.id}
                     id={item.id} 
                     title={item.title} 
                     body={item.body}
                     created_at={item.created_at}
                     comments={item.comments}
                     url={item.url}
                     index={item.index}   
                  />
                  
               )      
            })}

           </CardsContainer>

      </FormContainer>
   )
}