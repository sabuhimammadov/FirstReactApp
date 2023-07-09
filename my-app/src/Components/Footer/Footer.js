import React from "react";
import style from "../Footer/footer.module.css"
export class Footer extends React.Component{

    render(){

        return  (

            <footer className={style["footer-section"]}>

                <p className={style["footer-paragraf1"]}>Copyright by Sabuhi Mammadov, Trabook 2023. All rights reserved.</p>
                <p className={style["footer-paragraf2"]}>Terms & Conditions</p>

            </footer >
        )
    }
}

export default Footer