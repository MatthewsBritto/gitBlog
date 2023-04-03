import { CardItem } from "./styles"
import { PostsProps } from "../Form"
import { format, formatDistanceToNow, parseISO } from "date-fns"
import ptBr  from "date-fns/locale/pt-BR";



export function Card({body,comments,created_at,html_url,id,title}:PostsProps){


      const dateFormat = format(new Date(created_at), "d 'de' LLLL 'de' yyyy 'as' HH:mm'h'",{

         locale: ptBr,
      })

      const teste = new Date(created_at)

      const publishedDateRelativeNow = formatDistanceToNow((teste),{
         locale: ptBr,
         addSuffix:true,
      })

      console.log(publishedDateRelativeNow)
      

   return (
      <CardItem key={id}> 

         <div>
            <h3>{title}</h3>
            <span>{publishedDateRelativeNow}</span>
         </div>
      
         <p>{body}</p>
      </CardItem>
   )
};

