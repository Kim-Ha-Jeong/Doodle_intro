import React from 'react';
import Link from 'next/link';

import {Col} from 'antd';
import styled from 'styled-components';
import theme from '../../style/theme.js';

export default function Instagram() {
  return (
    <Col md={4}>
      <Link href='https://www.instagram.com/mydoodle.official/'>
        <Label theme={theme}>Instagram</Label>
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
  color: 'black';

  @media ${(props) => props.theme.mobile} {
    margin: 12% auto;
  }
`;