/** @format */

import React from "react";
import styled from "styled-components";
import Slide from '../molecules/slide.js';

export default function AboutSlide() {
    return (
        <Wrapper>
            <Slide dotPosition='right'
                img1='/bannerImage/banner1.png'
                img2='/bannerImage/banner2.png'
                img3='/bannerImage/banner3.png'
                img4='/bannerImage/banner4.png'
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;




