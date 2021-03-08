import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Header from '../src/components/organisms/header.js';
import Title from '../src/components/atoms/title.js';
import Email from '../src/components/organisms/email.js';

export default function Contact() {
    return (
        <Wrapper>
            <Header />
            <Title link={'/contact'} text={'Contact'} />
            <Email />
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