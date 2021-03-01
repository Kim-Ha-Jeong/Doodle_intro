import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import ProductLink from '../molecules/productLink.js';

export default function MainProduct() {
  return (
    <Wrapper>
      <ProductLink path={'https://smartstore.naver.com/my_doodle/products/5254327538'} name={'/productImage/slim.jpg'} />
      <ProductLink path={'https://smartstore.naver.com/my_doodle/products/5362152100'} name={'/productImage/bumper.jpg'} />
      <ProductLink path={'https://smartstore.naver.com/my_doodle/products/5362172389'} name={'/productImage/card.jpg'} />
      <ProductLink path={'https://smartstore.naver.com/my_doodle/products/5265774469'} name={'/productImage/smartTok.jpg'} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding : 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;