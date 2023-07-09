import React from "react";
import { CardList } from "./CardList";
export class ListCards extends React.Component{
render(){
//    console.log(this.props)
    const AllLists = this.props.lists?.map((list,index)=>{ 
        return <CardList  key={"list"+index} 
        title ={list.name}
        image ={list.img_url}
        price ={list.price}
        day ={list.day}
        rating ={list.rating}   />})
    return(
        <div>{AllLists}</div>
    )
}


}