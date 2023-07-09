import React from "react";
import style from "../Section7/Section7.module.css";
import { Mail } from "../../assents/icons/mail/mail";
export class Section7 extends React.Component {
  render() {
    return (
      <section className={style["section-7"]}>
        <div className={style["section-container1"]}>
          <p className={style["section-title"]}>
            Subscribe and get exclusive deals & offer
          </p>
        </div>
        <div className={style["section-container2"]}>
          <input className={style["section-input"]} placeholder="Enter your mail" />
          <button className={style["section-btn"]}>Subscribe</button>
        </div>
                  <span className={style["section-icon"]}><Mail/></span>

      </section>
    );
  }
}
