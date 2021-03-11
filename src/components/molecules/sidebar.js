import React from "react";
import { slide as Menu } from "react-burger-menu";

import Shop from "../atoms/shopLink.js";
import About from "../atoms/aboutLink.js";
import Contact from "../atoms/contactLink.js";
import Instagram from "../atoms/instagramLink.js";

export default function Sidebar ({active}){
    return (
        // Pass on our props
        <Menu right>
           <Shop active={active}/>
           <About active={active} />
           <Contact active={active} />
           <Instagram />
        </Menu>
    );
};

