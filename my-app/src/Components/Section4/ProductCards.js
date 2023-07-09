import React from "react";
// import {AiFillStar} from "react-icons/ai";
// import { Icon5 } from "../../assents/images/navigation/nav";
// import style from "./Slider.module.css"

import { ProductCard } from "./ProductCard";

export class ProductCards extends React.Component{

render(){
 //console.log(this.props.products)
const Allproducts = this.props.products?.map((product,index)=>{ 
return <ProductCard key={"product"+index}
title ={product.name}
image ={product.img_url}
city ={product.city}
oldPrice ={product.oldPrice}
newPrice ={product.newPrice}
rating ={product.rating}
/>})
//console.log(Allproducts)

// console.log(products)
    return(

<div>{Allproducts}</div>
    )
}


}

