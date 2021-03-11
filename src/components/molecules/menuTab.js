import React from 'react';

import Shop from '../atoms/shopLink.js';
import About from '../atoms/aboutLink.js';
import Contact from '../atoms/contactLink.js';
import Instagram from '../atoms/instagramLink.js';
import Logo from '../atoms/logo.js';

import {Row} from 'antd';
import styled from 'styled-components';

export default function menuTab({ active }) {
    return (
        // Pass on our props
        <CustomRow>
            <Logo />
            <Shop active={active} />
            <About active={active} />
            <Contact active={active} />
            <Instagram active={active} />
        </CustomRow>
    );
};

const CustomRow = styled(Row)`
    width: 100%;
    margin: 3% 0;
`