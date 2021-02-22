import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export default function Shop({ active }) {
  return (
    <Wrapper>
      <Link href='/shop' as='/shop'>
        <Label color='#666'>Shop</Label>
      </Link>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  margin: 30% 0 10% 0;
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
  font-size: 25px;
  font-weight: bold;
`;