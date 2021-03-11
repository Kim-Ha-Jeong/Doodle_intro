import React from 'react';
import Link from 'next/link';

import {Col} from 'antd';
import styled from 'styled-components';
import theme from '../../style/theme.js';

export default function About({active}) {
  return (
    <Col md={4}>
      <Link href='/about'>
        <a>
          {active === 'about' && (
            <>
              <Label theme={theme} color='#ff9045'>About Us</Label>
            </>
          )}
          {active != 'about' && (
            <>
              <Label theme={theme}>About Us</Label>
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