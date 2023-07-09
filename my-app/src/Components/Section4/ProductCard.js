import React from "react";
import {AiFillStar} from "react-icons/ai";
import { Icon5 } from "../../assents/images/navigation/nav";
import style from "./Slider.module.css"


export class ProductCard extends React.Component{

    render(){
     //   console.log(this.props)

        return (

            <div className="me-3">

            <div  className="card " style={{width: "18rem"}} >
            <img src={this.props.image} class="card-img-top" alt="..."style={{width: "286px",height:"286px"}}/>
            <div className="card-body">
            <div className="d-flex justify-content-between mb-3">
                <h5>{this.props.title}</h5>
                <div className="d-flex align-items-center">
                <AiFillStar className={style["icon-color"]}/>
                <span className="ms-2 ">{this.props.rating}</span>
                </div>
            </div>
            <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center ">
                <Icon5/>
            <span className="ms-2 ">{this.props.city}</span>
                </div>
                <div className="d-flex align-items-center">
                <span > <del>{this.props.oldPrice}</del></span>
                    <span className={style["span-info"]}>{this.props.newPrice}</span>
            
                </div>
            </div>
            
            </div>
            </div>  
            </div>
        )
    }
}