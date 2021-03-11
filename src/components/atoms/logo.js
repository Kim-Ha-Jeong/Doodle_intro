import React from 'react';
import Link from 'next/link';

import theme from '../../style/theme.js';
import styled from 'styled-components';
import {Col} from 'antd';

export default function Logo() {
    return (
        <CustomCol md={8} theme={theme}>
            <Link href='/'>
                <a>
                    <LogoImage theme={theme} src='/logo.png' />
                </a>
            </Link>
        </CustomCol>
    );
}
const LogoImage = styled.img`
    width: 100px;
    display: block;
    margin: 8px 0;

    @media ${(props) => props.theme.mobile}{
        margin : 15px;
    }
`

const CustomCol = styled(Col)`
    margin-right: 0;
    @media ${(props) => props.theme.mobile} {
        margin-right: 70%;
    }
`