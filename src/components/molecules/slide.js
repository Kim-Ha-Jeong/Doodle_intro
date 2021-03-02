/** @format */

import React from "react";
import styled from "styled-components";
import { Carousel } from 'antd';

export default function Slide({dotPosition, img1, img2, img3, img4, margin}) {
	return (
		<Wrapper margin={margin}>
			<Carousel dotPosition={dotPosition} autoplay>
				<div>
					<img src={img1} width="100%" />
				</div>
				<div>
					<img src={img2} width="100%" />
				</div>
				<div>
					<img src={img3} width="100%" />
				</div>
				<div>
					<img src={img4} width="100%" />
				</div>
			</Carousel>
		</Wrapper>
	);
};

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: ${(props) => props.margin || 0};
  display: flex;
  flex-direction: column;
  align-items: center;
`;




