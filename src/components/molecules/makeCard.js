import React from 'react';
import styled from 'styled-components';

import ProductImage from '../atoms/productImage.js';
import ProductLabel from '../atoms/productLabel.js';

export default function MakeCard({ name, text1, text2, price }) {
    return (
        <Wrapper>
            <ProductImage name={name} />
            <ProductLabel text1={text1} text2={text2} />
        </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;