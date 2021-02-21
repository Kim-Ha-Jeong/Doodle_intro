import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export default function Contact({ active }) {
  return (
    <Wrapper>
      <Link href='/contact'>
        <a>
          {active === "shop" && (
            <>
              <Label color='#ff9045'>Contact</Label>
            </>
          )}
          {active != "shop" && (
            <>
              <Label color='#666'>Contact</Label>
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