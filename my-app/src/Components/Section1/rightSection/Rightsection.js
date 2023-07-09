import React from "react";
import { Section1Img } from "../../../assents/images/sectionImg/Img1";
import style from "../rightSection/rightSection.module.css"
import { Icon5 } from "../../../assents/images/navigation/nav";
export class RightSection1 extends React.Component{


    render(){

        return (
<div className={style["right-section"]}>
<Section1Img/>
<div className={style["postion1"]}>
<Icon5  />
<div className={style["postion1-info"]}>
<h4 className={style["postion1_info"]}>Explore</h4>
<p className={style["postion1_paragraf"]}>Every cornar of the world with us</p>
</div>
</div>
</div>
        )
    }
}