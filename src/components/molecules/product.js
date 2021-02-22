import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import ProductImage from '../atoms/productImage.js';

export default function Product() {
  return (
    <Wrapper>
      <ProductImage path={'https://smartstore.naver.com/my_doodle/products/5254327538'} name={'/slim.jpg'} />
      <ProductImage path={'https://smartstore.naver.com/my_doodle/products/5362152100'} name={'/bumper.jpg'} />
      <ProductImage path={'https://smartstore.naver.com/my_doodle/products/5362172389'} name={'/card.jpg'} />
      <ProductImage path={'https://smartstore.naver.com/my_doodle/products/5265774469'} name={'/smartTok.jpg'} />
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