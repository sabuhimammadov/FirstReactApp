import React from "react";
import { CommentCard } from "./CommentCard";

export class CommentCards extends React.Component{

render(){
    const AllComments = this.props.comments?.map((comment,index)=>{ 
        return <CommentCard  key={"comment"+index} 
        title ={comment.name}
        image ={comment.img_url}
        price ={comment.yourcomment}
        day ={comment.ceo}
        rating ={comment.paragraf}
        city ={comment.city} />})

    return(

        <div>{AllComments}</div>
    ) 
}



}