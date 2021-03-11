import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Feed from 'react-instagram-authless-feed';

export default function instaPost() {
  return (
    <Wrapper>
      <Feed userName='mydoodle.official' className='Feed' classNameLoading='Loading' limit='9' />
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