import React from "react";
import { slide as Menu } from "react-burger-menu";

import Shop from "../atoms/shopLink.js";
import About from "../atoms/aboutLink.js";
import Contact from "../atoms/contactLink.js";
import Instagram from "../atoms/instagramLink.js";

export default function Sidebar (props){
    return (
        // Pass on our props
        <Menu {...props}>
           <Shop />
           <About />
           <Contact />
           <Instagram />
        </Menu>
    );
};
