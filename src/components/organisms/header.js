import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from 'axios';
import { useRouter } from 'next/router';

import Logo from '../atoms/logo.js';
import Sidebar from '../molecules/sidebar.js';

export default function Home() {

  return (
    <Wrapper id="header">
      <Logo />
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"header"} right/>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  background: white;
`;
