import React from "react";
import { slide as Menu } from "react-burger-menu";

import Shop from "../atoms/shop.js";
import About from "../atoms/about.js";
import Contact from "../atoms/contact.js";
import Instagram from "../atoms/instagram.js";

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
