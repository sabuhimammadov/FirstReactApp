import React from "react";
import style from "../leftSection6/leftSection6.module.css"
export class LeftSection extends React.Component{
render (){
return(
    <div className={style["left-section"]}> 
    <h4 className={style["left-section-title"]}>What people say <span className={style["left-section-span"]}>about Us.</span> </h4>
    <p className={style["left-section-paragraf"]}>Our Clients send us bunch of smilies with our services and we love them.</p>
    </div>

)
 
}
}