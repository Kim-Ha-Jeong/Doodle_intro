import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import MainSlide from '../src/components/organisms/mainSlide.js';
import MainProduct from '../src/components/molecules/mainProduct.js';
import Header from '../src/components/organisms/header.js';
import InstaPost from '../src/components/molecules/instaPost.js';

export default function Home() {

  return (
    <>
      <Container>
        <Header />
        <MainSlide />
        <MainProduct />
        <InstaPost />
      </Container>
    </>
  );
}

const Container = styled.div`
 width: 80%;
 text-align: center;
`
