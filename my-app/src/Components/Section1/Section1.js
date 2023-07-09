import React from "react";
import { LeftSection } from "./leftsection/LeftSection";
import { RightSection1 } from "./rightSection/Rightsection";

export class Section1 extends React.Component{
render(){

    return (
<section className="d-flex justify-content-around mt-5">
<LeftSection/>
   <RightSection1/>
  
</section>


    )
}


}