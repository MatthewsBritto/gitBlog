import { formatDistanceToNow } from 'date-fns';
import { useEffect, useState } from 'react';
import { FaGithub, FaCalendar, FaComment , FaLess} from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom'
import { apiPost, postInfo } from '../../lib/axios'
import { Infos, Links, PostContainer, TextContainer, TitleContainer } from './styles';
import ptBr  from "date-fns/locale/pt-BR";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'



export interface PostsProps{
   url:string;
   title:string;
   body:string;
   comments:string;
   created_at: Date;
   id:number;
   index:number;
   login:string;
}

export function Post(){

   const [post, setPost] = useState<PostsProps>({} as PostsProps)

   const [dateAt, setDateAt] =  useState('')

   const navigate = useNavigate()

   const {index} = useParams()

   async function getDataApi() {
      
      const res = await postInfo.get(`${index}`)
      .then(res => res.data)
      .catch(err => console.log(err)) 

      const Obj = {
         title: res.title,
         body:res.body,
         comments: res.comments,
         created_at: new Date(res.created_at),
         id: res.id,
         index: res.index,
         url: res.html_url,
         login:res.user.login
      }

      if (Obj) {
         const publishedDateRelativeNow = formatDistanceToNow((Obj.created_at),{
            locale: ptBr,
            addSuffix:true,
         })  
         setDateAt(publishedDateRelativeNow)
         setPost(Obj)
      }
                
   }
     

 

   useEffect(() =>{
      getDataApi()
   },[])

   

   return( 
      <PostContainer>
         <TitleContainer>  

            <Links>
               <li onClick={() => navigate('/')}>
                  <span> Voltar </span>
               </li>

               <li>
                  <a href={post.url}>
                     <span>Ver no github</span>
                  </a>
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
                  <p>{dateAt}</p>
               </li>
               <li>
                  <span><FaComment size={20}/></span>
                  <p>{post.comments}</p>
               </li>
            </Infos>
         </TitleContainer>

         <TextContainer>
            <ReactMarkdown children={post.body} />
         </TextContainer>
      </PostContainer>
   )
}