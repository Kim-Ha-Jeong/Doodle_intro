import React from 'react';

import styled from 'styled-components';
import theme from '../../style/theme.js';

import Logo from '../atoms/logo.js';
import Sidebar from '../molecules/sidebar.js';
import MenuTab from '../molecules/menuTab.js';

export default function Header({ active }) {
  return (
    <Wrapper>
      <MobileWrapper id="header" theme={theme}>
        <Logo />
        <Sidebar active={active} pageWrapId={"page-wrap"} outerContainerId={"header"} right />
      </MobileWrapper>
      <DeskWrapper theme={theme}>
        <MenuTab active={active} />
      </DeskWrapper>
    </Wrapper>
  );
}
const MobileWrapper = styled.div`
  width: 100%;
  height: fit-content;
  background: white;
  display: none;
  @media ${(props) => props.theme.mobile} {
    display: inline-block;
  }
`;

const DeskWrapper = styled.div`
  display: flex;
  @media ${(props) => props.theme.mobile}{
    display: none;
  } 
`
const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  background: white;
`

