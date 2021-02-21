import React from 'react';
import styled from 'styled-components';

import Logo from '../atoms/logo.js';
import Sidebar from './sidebar.js';

const items = [
    { name: 'about', label: 'About Us' },
    { name: 'shop', label: 'Shop' }
]

export default function header() {
    return (
        <Wrapper>
            <Logo />
            <Sidebar />
        </Wrapper>
    );
}
const Wrapper = styled.div`
flex-direction:row;
display: flex;
justify-content : space-between;
height : 100px;
`;