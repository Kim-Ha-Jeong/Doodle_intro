/** @format */

import React from "react";
import styled from "styled-components";
import Slide from '../molecules/slide.js';

export default function MainSlide() {
    return (
        <Wrapper>
            <Slide dotPosition='bottom'
                img1='/bannerImage/banner1.png'
                img2='/bannerImage/banner2.png'
                img3='/bannerImage/banner3.png'
                img4='/bannerImage/banner4.png'
                margin='15%'
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




