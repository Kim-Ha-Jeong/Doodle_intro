import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';
import theme from '../../style/theme.js'
import { Col } from 'antd'

export default function ProductLink({ path, name }) {
    return (
        <CustomCol md={6} theme={theme}>
            <Link href={path}>
                <img src={name} width="100%" />
            </Link>
        </CustomCol>
    );
}

const CustomCol = styled(Col)`
    margin-top: 0;
    @media ${(props) => props.theme.mobile} {
        margin-top: 5%;
    }
`