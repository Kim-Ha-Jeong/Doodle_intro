import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from 'axios';
import { useRouter } from 'next/router';
import { Carousel } from "antd";
import MainSlide from '../src/components/organisms/mainSlide.js';

export default function Order() {
  return (
      <Wrapper>
			<MainSlide />
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
const Thumbnail = styled.div`
 backgroundColor: #efefef;
 height: 5rem;
`;
const InputFile = styled.input`
`;

const DoodleButton = styled.button`
`;
const PhotoCheck = styled.img`
`;