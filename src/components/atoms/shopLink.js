import React from 'react';
import Link from 'next/link';

import {Col} from 'antd';
import styled from 'styled-components';
import theme from '../../style/theme.js';

export default function ShopLink({active}) {
  return (
    <Col md={4}>
      <Link href='/shop' as='/shop'>
        <a>
          {active === 'shop' && (
            <>
              <Label theme={theme} color='#ff9045'>Shop</Label>
            </>
          )}
          {active != 'shop' && (
            <>
              <Label theme={theme}>Shop</Label>
            </>
          )}
        </a>
      </Link>
    </Col>
  );
}

const Label = styled.label`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 22.5px;
  font-weight: bold;
  color: ${props => props.color || 'black'};

  @media ${(props) => props.theme.mobile} {
    margin: 12% auto;
  }
`;