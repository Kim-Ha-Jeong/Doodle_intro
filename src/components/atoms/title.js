import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';
import theme from '../../style/theme.js';

export default function Title({link,text}) {
  return (
    <Wrapper theme={theme}>
      <Link href={link} as={link}>
        <Label>{text}</Label>
      </Link>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: none;

  @media ${(props) => props.theme.mobile} {
    width: 100%;
    padding: 20% 0 5% 0;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Label = styled.label`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
`;