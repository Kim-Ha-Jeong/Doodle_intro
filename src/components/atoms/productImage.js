import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export default function Instagram() {
  return (
    <Wrapper>
      <a href='https://www.instagram.com/mydoodle.official/'>
        where is my waller?
      </a>
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