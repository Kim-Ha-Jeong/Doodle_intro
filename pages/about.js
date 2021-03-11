import React from 'react';

import styled from 'styled-components';
import theme from '../src/style/theme.js';

import Header from '../src/components/organisms/header.js';
import AboutSlide from '../src/components/organisms/aboutSlide.js';
import CenterSlide from '../src/components/organisms/centerSlide.js';
import Title from '../src/components/atoms/title.js';

export default function About() {
    return (
        <Container theme={theme}>
            <Header active='about' />
            <Title link={'/about'} text={'About Us'} />
            <AboutSlide />
            <CenterSlide />
        </Container>
    );
}

const Container = styled.div`
 width: 70%;
 margin: 0 auto;

 @media ${(props) => props.theme.mobile} {
   width: 100%;
 }
`