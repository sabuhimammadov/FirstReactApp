import React from "react";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from "./Slider.module.css"
// import { Icon5 } from "../../assents/images/navigation/nav";
// import {AiFillStar} from "react-icons/ai";
import { ProductCards } from "./ProductCards";
import PropTypes from 'prop-types';

const data1 = [
{img_url:"https://t3.ftcdn.net/jpg/00/35/36/50/240_F_35365081_cEojngrLRqcsYrWFmXckGFaGahYsVg8y.jpg",
name:"Madrid",
city:"Spain",
oldPrice:"$950",
newPrice:"$850",
rating:"4.8"},

]
const data2 = [
    {img_url:"https://media.istockphoto.com/id/586938624/photo/bridges-of-florence.jpg?s=612x612&w=0&k=20&c=iz1LVMZX7iCjAOE6_IZomA5RKIuOWYGAwsIUjU8Hgps=",
    name:"Firenze",
    city:"Italy",
    oldPrice:"$850",
    newPrice:"$750",
    rating:"4.5"}
    ]
    const data3 = [
        {img_url:"https://img.freepik.com/free-photo/beautiful-wide-shot-eiffel-tower-paris-surrounded-by-water-with-ships-colorful-sky_181624-5118.jpg?size=626&ext=jpg",
        name:"Paris",
        city:"France",
        oldPrice:"$699",
        newPrice:"$599",
        rating:"4.4"}
        ]

       const data4 = [
            {img_url:"https://images.pexels.com/photos/88514/city-building-night-view-night-88514.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:"London",
            city:"UK",
            oldPrice:"$850",
            newPrice:"$750",
            rating:"4.8"}
           ]
            const data5 = [
                {img_url:"https://media.istockphoto.com/id/1309119061/photo/seaside-boulevard-in-baku.jpg?s=612x612&w=0&k=20&c=zOQ6fJ_NFI3Ig-em4Oxdfn7NbLNbGPLDl_xoqRUlbmg=",
                name:"Baku",
                city:"Old City",
                oldPrice:"$550",
                newPrice:"$450",
                rating:"4.4"}
                ]
                const data6 = [
                    {img_url:"https://media.istockphoto.com/id/910630664/photo/city-of-amsterdam-the-netherlands.jpg?s=612x612&w=0&k=20&c=J-LUcnKTHkARWjOzm-ptlhZigHD_Mc18UXgBHIuKlf4=",
                    name:"Nederland",
                    city:"Amsterdam",
                    oldPrice:"$850",
                    newPrice:"$750",
                    rating:"4.6"}
                    ]
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  
export class Section4 extends React.Component{

    static defaultProps = {
        listName:"Products"
    }

    render(){
        return(
         <section>
            <div className={style["section-4"]}>
          <h4 className={style["section4-title"]}>Exclusive <span className={style["section4-span"]}>deals & discounts</span>  </h4>
          <p className={style["section4-paragraf"]}>Discover our fantastic early booking discounts & start planning your journey.</p>  
          </div> 
          <div className={style["section4-slider"]}>
    <Slider {...settings}> 
   <ProductCards products ={data1}/>
   <ProductCards products ={data2}/>
   <ProductCards products ={data3}/>
   <ProductCards products ={data4}/>
   <ProductCards products ={data5}/>
   <ProductCards products ={data6}/>

    </Slider> 



         
          </div>
          </section>
        
          
          
          )
    }
}

ProductCards.propTypes ={
    products: PropTypes.array

}