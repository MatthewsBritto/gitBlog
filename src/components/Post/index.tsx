import { formatDistanceToNow } from 'date-fns';
import { useEffect, useState } from 'react';
import { FaGithub, FaCalendar, FaComment , FaLess} from 'react-icons/fa';
import { useParams } from 'react-router-dom'
import { apiPost, postInfo } from '../../lib/axios'
import { Infos, Links, PostContainer, TextContainer, TitleContainer } from './styles';
import ptBr  from "date-fns/locale/pt-BR";



export interface PostsProps{
   url:string;
   title:string;
   body:string;
   comments:string;
   created_at: string;
   id:number;
   index:number;
   login:string;
}

export function Post(){

   const [post, setPost] = useState<PostsProps>({} as PostsProps)

   const {index} = useParams()

   async function getDataApi() {
      
      const res = await postInfo.get(`${index}`)
      .then(res => res.data)
      .catch(err => console.log(err)) 

      const Obj = {
         title: res.title,
         body:res.body,
         comments: res.comments,
         created_at:res.created_at,
         id: res.id,
         index: res.index,
         url: res.url,
         login:res.user.login
      }

      setPost(Obj)
           
   }

   const teste = new Date(post.created_at)

   const publishedDateRelativeNow = formatDistanceToNow((teste),{
      locale: ptBr,
      addSuffix:true,
   })  
   useEffect(() =>{
      getDataApi()
   },[])
   return( 
      <PostContainer>
         <TitleContainer>  

            <Links>
               <li >
                  <span> Voltar </span>
               </li>

               <li>
                  <span>Ver no github</span>
               </li>
            
            </Links>

            <h1>{post.title}</h1>
            <Infos>
               <li>
                  <span><FaGithub size={20}/></span>
                  <p>{post.login}</p>
               </li>
               <li>
                  <span><FaCalendar size={20}/></span>
                  <p>{publishedDateRelativeNow}</p>
               </li>
               <li>
                  <span><FaComment size={20}/></span>
                  <p>{post.comments}</p>
               </li>
            </Infos>
         </TitleContainer>

         <TextContainer>
            <p>{post.body}</p>
         </TextContainer>
      </PostContainer>
   )
}