/** @format */

import React from "react";
import styled from "styled-components";
import { Carousel } from 'antd';

export default function MainSlide() {
	return (
		<Wrapper>
			<Carousel autoplay>
				<div>
					<img src='/bannerImage/banner1.png' width="100%" />
				</div>
				<div>
					<img src='/bannerImage/banner2.png' width="100%" />
				</div>
				<div>
					<img src='/bannerImage/banner3.png' width="100%" />
				</div>
				<div>
					<img src='/bannerImage/banner4.png' width="100%" />
				</div>
			</Carousel>
		</Wrapper>
	);
};

const Wrapper = styled.div`
  width: 100%;
  margin-top: 2%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;




