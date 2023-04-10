import { CardItem } from "./styles"
import { PostsProps } from "../Form"
import { format, formatDistanceToNow, parseISO } from "date-fns"
import ptBr  from "date-fns/locale/pt-BR";
import { useNavigate } from "react-router-dom";




export function Card({body,comments,created_at,url,id,title,index}:PostsProps) {

   

   const navigate = useNavigate()


   const teste = new Date(created_at)

   const publishedDateRelativeNow = formatDistanceToNow((teste),{
      locale: ptBr,
      addSuffix:true,
   })      

   function navegateToPost(number:number){
        
         navigate(`/post/${number}`)

   }


   return (
      <CardItem key={id} onClick={() => {navegateToPost(index)}}> 

         <div>
            <h3>{title}</h3>
            <span>{publishedDateRelativeNow}</span>
         </div>
      
         <p>{body}</p>
      </CardItem>
   )
};

