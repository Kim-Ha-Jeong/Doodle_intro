import React, { useState, useEffect } from "react";

import styled from 'styled-components';
import theme from '../src/style/theme.js';

import MainSlide from '../src/components/organisms/mainSlide.js';
import MainProduct from '../src/components/molecules/mainProduct.js';
import Header from '../src/components/organisms/header.js';
import InstaPost from '../src/components/molecules/instaPost.js';

export default function Home() {

  return (
    <Container theme={theme}>
      <Header size='desktop'/>
      <MainSlide />
      <MainProduct />
      <InstaPost />
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
