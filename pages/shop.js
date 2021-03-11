import React from 'react';

import styled from 'styled-components';
import theme from '../src/style/theme.js';

import Header from '../src/components/organisms/header.js';
import Title from '../src/components/atoms/title.js';
import ProductGroup from '../src/components/organisms/productGroup.js'

export default function Shop() {
  return (
      <Container theme={theme}>
        <Header active='shop' />
        <Title link={'/shop'} text={'Shop'}/>
        <ProductGroup />
		</Container>
  );
}

const Container = styled.div`
 width: 70%;
 margin: 0 auto;

 @media ${(props) => props.theme.mobile} {
   width: 100%;
 }
`