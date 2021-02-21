import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from 'axios';
import { useRouter } from 'next/router';

import Sidebar from '../src/components/molecules/sidebar.js';
import Header from '../src/components/molecules/header.js'
import MainBanner from "../src/components/molecules/mainbanner.js";
import PhotoReview from "../src/components/organisms/photoReview.js";

export default function Home() {

  return (
    <Wrapper>
      <Header />
      <MainBanner/>
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