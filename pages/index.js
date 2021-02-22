import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from 'axios';
import { useRouter } from 'next/router';

import Logo from '../src/components/atoms/logo.js';
import Sidebar from '../src/components/molecules/sidebar.js';
import MainSlide from "../src/components/organisms/mainSlide.js";

export default function Home() {

  return (
    <div id="home">
      <Logo />
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"home"} right/>
      <MainSlide />
    </div>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;