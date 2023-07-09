import React from "react";
import style1 from "../leftsection/LeftSection.module.css";

export class LeftSection extends React.Component {
  render() {
    return (
      <div className={style1["left-container"]}>
        <h2 className={style1["section-title"]}>
          Get started your exciting
          <span className={style1["simple-btn"]}>journey</span> with us.
        </h2>

        <p className={style1["section-paragraf"]}>
          A Team of experienced tourism professionals will provide you with the
          best advice and tips for your desire place.
        </p>
        <button className={style1["section-btn"]}>Discover Now</button>
      </div>
    );
  }
}
