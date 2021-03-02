import React from 'react';
import styled from "styled-components";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';

import MakeCard from '../molecules/makeCard.js';

export default function CenterSlide() {
    return (
        <Wrapper>
            <Carousel
                animationSpeed={1250}
                offset={0}
                autoPlay={3000}
                stopAutoPlayOnHover
                itemWidth={200}
                infinite
                clickToChange
            >
                <MakeCard name='/favicon.ico'
                    text1={'아이그림을'}
                    text2={'사진 찍어서 보내주세요'} />
                <MakeCard name='/favicon.ico'
                    text1={'아이그림을'}
                    text2={'사진 찍어서 보내주세요'} />
                <MakeCard name='/favicon.ico'
                    text1={'아이그림을'}
                    text2={'사진 찍어서 보내주세요'} />
                <MakeCard name='/favicon.ico'
                    text1={'아이그림을'}
                    text2={'사진 찍어서 보내주세요'} />
                <MakeCard name='/favicon.ico'
                    text1={'아이그림을'}
                    text2={'사진 찍어서 보내주세요'} />
            </Carousel>
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