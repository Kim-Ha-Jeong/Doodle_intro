import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export default function productImage({path, name}) {
  return (
    <Wrapper>
      <Link href={path}>
        <img src={name} width="100%" />
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin : 5% 0;
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