import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import ProductImage from '../atoms/productImage.js';
import ProductLabel from '../atoms/productLabel.js';

export default function Card({ path, name, text }) {
    return (
        <Wrapper>
            <a href={path}>
            <ProductImage name={name} />
            <ProductLabel text={text} />
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