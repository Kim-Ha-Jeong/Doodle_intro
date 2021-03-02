import react from "react";
import styled from "styled-components";

import Header from '../src/components/organisms/header.js';
import AboutSlide from '../src/components/organisms/aboutSlide.js';
import CenterSlide from '../src/components/organisms/centerSlide.js';
import Title from '../src/components/atoms/title.js';

export default function About() {
    return (
        <Wrapper>
            <Header />
            <Title link={'/about'} text={'About Us'} />
            <AboutSlide />
            <CenterSlide />
        </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;