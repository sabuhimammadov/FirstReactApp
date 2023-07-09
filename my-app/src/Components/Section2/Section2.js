import React from "react";
import style from "../Section2/Section2.module.css"
import { Arrow } from "../../assents/icons/arrow/arrow";

export class Section2 extends React.Component {
  render() {
    return (
      <section className={style["section2"]}>
        <div>
          <div className="d-flex align-items-center">
            <h3 className="me-2">Location</h3>
            <Arrow />
          </div>
          <p>Where are you going</p>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <h3 className="me-2">Date</h3>
            <Arrow />
          </div>
          <p>When you will go</p>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <h3 className="me-2">Guest</h3>
            <Arrow />
          </div>
          <p>Number of guest</p>
        </div>
        <button className={style["section2-btn"]}>Explore Now</button>
      </section>
    );
  }
}
