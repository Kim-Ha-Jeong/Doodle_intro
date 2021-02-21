import React, { useState } from 'react';
import styled from 'styled-components';

//import Sidebar from './sidebar.js';
import Shop from './shop.js';
import About from "./about.js";
import Contact from "./contact.js";

import { slide as Menu } from 'react-burger-menu'

export default function Sidebar({active}) {
    const open = (e) => {
        e.preventDefault();
    };

    return (
        <Wrapper>
            <Menu right>
                <Shop active={active}/>
                <About active={active}/>
                <Contact active={active}/>
            </Menu>
            <MenuImage src='/menu.png' onClick={open} />
        </Wrapper>
    );
}
const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    justify-items: right;
`;
const MenuImage = styled.img`
    width: 20%;
    display: block;
    margin: 7.5% 0 7% 70%;
    display: flex-end;
`