import React from "react"
import style from "../Section6/Section6.module.css"
import { LeftSection } from "./leftSection6/LeftSection6"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import { CommentCards } from "./CommentCards";

const settings = {
    dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
 };

 const data1 =[
    {
        img_url:"https://media.licdn.com/dms/image/C4E03AQE_RtCqB4dfNw/profile-displayphoto-shrink_800_800/0/1618244200520?e=2147483647&v=beta&t=j6RQAh1D12CCIq0iXWz7AbJ7-CNRakdIAgvFeNLKXo4",
        yourcomment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        city:"Lahore, Pakistan",
        name:"Mike taylor",
        ceo:"Sabuhi Mammadov",
        paragraf:"CEO of Red Button"
            }
 ]
 const data2 =[
    {
        img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQslNT5BQndIBXkinYEsQ5EHt8ZpDC6jbozhA1gJzKOQCNMMMMJQIlSzPRrgXz5kG85I9o&usqp=CAU",
        yourcomment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        city:"German, Dutch",
        name:"Emma ",
        ceo:"Sabuhi Mammadov",
        paragraf:"CEO of Red Button"
            }
 ]
 const data3 =[
    {
        img_url:"https://media.licdn.com/dms/image/C4E03AQGVKK45te1XxA/profile-displayphoto-shrink_800_800/0/1615044002171?e=2147483647&v=beta&t=_B604Q5T5tKCPb1A-JPyjhYaqaOsM9YZ26qnzxWL6cA",
        yourcomment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        city:"Greek",
        name:"Chloe  ",
        ceo:"Sabuhi Mammadov",
        paragraf:"CEO of Red Button"
            }
 ]
 const data4 =[
    {
        img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLG1saXy4HE7BD-dbokUGveRLtKMASmZfltA&usqp=CAU",
        yourcomment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        city:"Spanish, Portuguese",
        name:"John Doe",
        ceo:"Sabuhi Mammadov",
        paragraf:"CEO of Red Button"
            }
 ]
 
 export class Section6 extends React.Component{

    render(){
        return(
            <section className={style["section6"]}>
            <LeftSection/>
            <div className={style["section6-slider"]}>
          <Slider {...settings}>
            <CommentCards comments ={data1}/>
            <CommentCards comments ={data2}/>
            <CommentCards comments ={data3}/>
            <CommentCards comments ={data4}/>

          </Slider>
        </div>
                    </section>
            

        )

    }
}
CommentCards.propTypes = {
    lists: PropTypes.array,
  };