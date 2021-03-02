import React, {useState, useEffect} from "react";
import styled from "styled-components";

import Header from '../src/components/organisms/header.js';
import Title from '../src/components/atoms/title.js';
import ProductGroup from '../src/components/organisms/productGroup.js'

export default function Shop() {
  return (
      <Wrapper>
        <Header/>
        <Title link={'/shop'} text={'Shop'}/>
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