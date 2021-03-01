import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export default function About() {
  return (
    <Wrapper>
      <Link href='/about'>
        <Label color='#666'>About Us</Label>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin : 10% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
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