import React from "react";

import styled from 'styled-components';
import theme from '../src/style/theme';

import Header from '../src/components/organisms/header.js';
import Title from '../src/components/atoms/title.js';
import Email from '../src/components/organisms/email.js';

export default function Contact() {
    return (
        <Container theme={theme}>
            <Header active='contact' />
            <Title link={'/contact'} text={'Contact'} />
            <Email />
        </Container>
    );
}

const Container = styled.div`
 width: 70%;
 margin: 0 auto;

 @media ${(props) => props.theme.mobile} {
   width: 80%;
 }
`