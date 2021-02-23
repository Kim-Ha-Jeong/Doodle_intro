import React from "react";
import styled from "styled-components";

import Header from '../src/components/organisms/header.js';

export default function About() {
    return (
        <Wrapper>
            <Header />
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