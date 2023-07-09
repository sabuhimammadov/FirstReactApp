import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Section5.module.css";
import PropTypes from "prop-types";
import { ListCards } from "./ListCards";

const settings = {
   dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const data1 = [
  {
    img_url:
      "https://pipandthecity.com//wp-content/uploads/2020/07/Bodelwyddan-Castle-1-2.jpg",
    name: "Rome, Italty",
    price: "$5,42k",
    day: "10 Days Trip",
    rating: "4.8",
  },
];
const data2 = [
  {
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyh5Q95bSTiob2WfvjfSdLgZKuoOZehPbgcA&usqp=CAU",
    name: "London,UK",
    price: "$2,42k",
    day: "07 Days Trip",
    rating: "4.7",
  },
];
const data3 = [
  {
    img_url:
      "https://media.istockphoto.com/id/1138049211/photo/dotonbori-shopping-street-in-osaka-japan.jpg?s=612x612&w=0&k=20&c=90G7nMVBNS3Jcq8uTA88dMvLP5DktigVa5obvUv06CU=",
    name: "Osaka,Japan",
    price: "$5,42k",
    day: "10 Days Trip",
    rating: "4.8",
  },
];
const data4 = [
  {
    img_url:
      "https://media.istockphoto.com/id/1360012506/photo/camel-caravan-going-through-the-sahara-desert-in-morocco-at-sunset.jpg?s=612x612&w=0&k=20&c=WJAcxHx4yNhy9sSOt7zQ7oErGnsJ0OnRBl_Xs74pvJc=",
    name: "Morocco ",
    price: "$3,42k",
    day: "6 Days Trip",
    rating: "4.5",
  },
];
const data5 = [
  {
    img_url:
      "https://media.istockphoto.com/id/1031260946/photo/ortakoy-mosque-of-istanbul.jpg?s=612x612&w=0&k=20&c=Bes-afVhEprAQEz8hcS-PTASTJNeZxRoOBtUPQaBxdg=",
    name: "Turkey",
    price: "$2,42k",
    day: "5 Days Trip",
    rating: "4.4",
  },
];
const data6 = [
  {
    img_url:
      "https://media.istockphoto.com/id/1266923176/photo/panorama-of-dubai-marina-in-uae-modern-skyscrapers-and-port-with-luxury-yachts.jpg?s=612x612&w=0&k=20&c=3Jqg80C7iBD1LJW6P9GFtUbk9BaWUGj0nkHyMEM36bU=",
    name: "Dubai",
    price: "$5,42k",
    day: "3 Days Trip",
    rating: "4.6",
  },
];
export class Section5 extends React.Component {
  render() {
    return (
      <section>
        <div className={style["section-5"]}>
          <h4 className={style["section5-title"]}>
            Best 
            <span className={style["section5-span"]}>vacation plan</span>{" "}
          </h4>
          <p className={style["section5-paragraf"]}>
            Plan your perfect vacation with our travel agency. Choose among
            hundreds of all-inclusive offers!
          </p>
        </div>
        <div className={style["section5-slider"]}>
          <Slider {...settings}>
            <ListCards lists ={data1}/>
            <ListCards lists ={data2}/>
            <ListCards lists ={data3}/>
            <ListCards lists ={data4}/>
            <ListCards lists ={data5}/>
            <ListCards lists ={data6}/>

          </Slider>
        </div>
      </section>
    );
  }
}

ListCards.propTypes = {
  lists: PropTypes.array,
};
