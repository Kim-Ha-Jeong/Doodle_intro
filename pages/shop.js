import React, {useState, useEffect} from "react";
import styled from "styled-components";

import Header from '../src/components/organisms/header.js';
import ShopLink from '../src/components/atoms/shopLink.js';
import ProductGroup from '../src/components/organisms/productGroup.js'

export default function Shop() {
  return (
      <Wrapper>
        <Header/>
        <ShopLink/>
        <ProductGroup />
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