import { CardItem } from "./styles"
import { PostsProps } from "../Form"
import { format, formatDistanceToNow, parseISO } from "date-fns"
import ptBr  from "date-fns/locale/pt-BR";



export function Card({body,comments,created_at,html_url,id,title}:PostsProps){


      const dateFormat = format(parseISO(created_at), "d 'de' LLLL 'as' HH:mm'h'",{

         locale: ptBr,
       })    

      const publishedDateRelativeNow = formatDistanceToNow(parseInt(dateFormat),{
         locale: ptBr,
         addSuffix:true,
      })


   return (
      <CardItem key={id}> 

         <div>
            <h3>{title}</h3>
            <span>{created_at}</span>
         </div>
      
         <p>{body}</p>
      </CardItem>
   )
};