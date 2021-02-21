import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export default function About({ active }) {
  return (
    <Wrapper>
      <Link href='/about'>
        <a>
          {active === "shop" && (
            <>
              <Label color='#ff9045'>About Us</Label>
            </>
          )}
          {active != "shop" && (
            <>
              <Label color='#666'>About Us</Label>
            </>
          )}
        </a>
      </Link>
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
const Label = styled.label`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;