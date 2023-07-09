import React from "react";
import { Icon1 } from "../../assents/icons/icon1/icon1";
import { Icon2 } from "../../assents/icons/icon2/icon2";
import { Icon3 } from "../../assents/icons/icon3/icon3";
import style from "../Section3/Section3.module.css"
import { Icon4 } from "../../assents/icons/icon4/icon4";
export class Section3 extends React.Component{

    render(){


        return(
<section className={style["section-3"]}>

<h3 className={style["section3-title"]}>Things you need <span className={style["section3-span"]}>to do</span> </h3>
<p className={style["paragraf"]}>We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford.</p>

<div className={style["AllCards"]}>
<div className={style["myCard"]}>
<Icon1/>
<h4 className={style["myCard-title"]}>Sign Up</h4>
<p > Completes all the work associated with planning and processing</p>
</div>
<div className={style["myCard"]}>
    <Icon2/>
    <h4 className={style["myCard-title"]}>Worth of Money</h4>
<p>After successful access then book from exclusive deals & pricing</p>

</div>
<div className={style["myCard"]}>
    <Icon3/>
    <h4 className={style["myCard-title"]}>Exciting Travel</h4>
<p>Start and explore a wide range of exciting travel experience.</p>

</div>



</div>

<div  className={style["icon4"]} >
    <Icon4/>
</div>
</section>




        )
    }
}