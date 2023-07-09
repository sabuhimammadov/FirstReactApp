import React from "react";
import { HeaderIcon } from "../assents/icons";
import { BtnInfo } from "../ui/button/button";
import { SimpleBtn } from "../ui/simpleBtn/button";
// import headerIcon from  "../assents/icons/header-icon.svg"
class Header extends React.Component{

render(){

return(
<header>
<div className="container">


    <div className="d-flex justify-content-between align-items-center">

    <div className="logo-content d-flex align-items-center">
   <h2 className="me-2">Trabook</h2>
   <HeaderIcon/>
   </div>


<nav className="mt-3"> 
<ul className="d-flex "> 
    <li className="me-4">Home</li>
    <li className="me-4">About</li>
    <li className="me-4">Destination</li>
    <li className="me-4">Tour</li>
    <li className="me-4">Blog</li>

</ul>
</nav>
<SimpleBtn/>
<BtnInfo/>

    </div>

</div>










</header>


)


}


}
export default Header