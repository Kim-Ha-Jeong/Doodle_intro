import React from 'react';
import styled from 'styled-components';

import ProductImage from '../atoms/productImage.js';
import ProductLabel from '../atoms/productLabel.js';
import PriceLabel from '../atoms/priceLabel.js';

export default function Card({ path, name, text1, text2, price }) {
    return (
        <Wrapper>
            <a href={path}>
            <ProductImage name={name} />
            <ProductLabel text1={text1} text2={text2} />
            <PriceLabel price={price} />
            </a>
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