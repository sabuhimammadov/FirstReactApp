import React from "react";
import style from "../Section6/Section6.module.css"
import {AiFillStar} from "react-icons/ai";

export class CommentCard extends React.Component{


    render(){
console.log(this.props)
        return (
 

<div className={style["section-main"]} >
           
<div class="card d-flex flex-column  align-items-center pt-2" style={{width: "18rem;"}}>
  <img src={this.props.image} class="card-img-top rounded-circle" alt="..." style={{width:"80px",height:"80px",objectFit:"cover"}}/>
  <div class="card-body">
    <div className="text-center">
    <AiFillStar className={style["icon-color"]}/>
    <AiFillStar className={style["icon-color"]}/>
    <AiFillStar className={style["icon-color"]}/>
    <AiFillStar className={style["icon-color"]}/>

    </div>

    <h5 class="card-title">{this.props.title}</h5>
    <p class="card-text">{this.props.price}</p>
    <p class="card-text fst-italic text-muted">{this.props.city} </p>
  </div>
</div>

          </div>


         
      
        )
    }
}