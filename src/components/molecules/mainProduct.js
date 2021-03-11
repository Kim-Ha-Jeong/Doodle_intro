import React from 'react';
import styled from 'styled-components';
import theme from '../../style/theme.js';
import {Row} from 'antd';

import ProductLink from '../molecules/productLink.js';

export default function MainProduct() {
  return (
    <CustomRow theme={theme}>
      <ProductLink path={'https://smartstore.naver.com/my_doodle/products/5254327538'} name={'/productImage/slim.jpg'} />
      <ProductLink path={'https://smartstore.naver.com/my_doodle/products/5362152100'} name={'/productImage/bumper.jpg'} />
      <ProductLink path={'https://smartstore.naver.com/my_doodle/products/5362172389'} name={'/productImage/card.jpg'} />
      <ProductLink path={'https://smartstore.naver.com/my_doodle/products/5265774469'} name={'/productImage/smartTok.jpg'} />
    </CustomRow>
  );
}

const CustomRow = styled(Row)`
margin-top: 2.5%;

@media ${(props) => props.theme.mobile} {
  margin-top: 0;
}
`