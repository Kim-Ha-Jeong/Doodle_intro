import React from 'react';

import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import { Row, Col } from 'antd';
import ProductImage from '../atoms/productImage.js';
import ProductLabel from '../atoms/productLabel.js';
import MakeCard from '../molecules/makeCard.js';

import styled from "styled-components";
import theme from '../../style/theme.js';


export default function CenterSlide() {
    return (
        <Wrapper>
            <MobileCarousel theme={theme}
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
            </MobileCarousel>


            <DeskRow theme={theme} id='deskRow'>
                <DeskCol md={8} id='item'>
                    <ProductImage name='/favicon.ico' />
                    <ProductLabel text1={'아이 그림을'} text2={'사진 찍어서 보내주세요'} />
                </DeskCol>
                <DeskCol md={8} id='item'>
                    <ProductImage name='/favicon.ico' />
                    <ProductLabel text1={'아이 그림을'} text2={'사진 찍어서 보내주세요'} />
                </DeskCol>
                <DeskCol md={8} id='item'>
                    <ProductImage name='/favicon.ico' />
                    <ProductLabel text1={'아이 그림을'} text2={'사진 찍어서 보내주세요'} />
                </DeskCol>
            </DeskRow>
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

const MobileCarousel = styled(Carousel)`
    display: none;
    @media ${(props) => props.theme.mobile} {
        display: block;
    }
`

const DeskRow = styled(Row)`
    display: flex;
    margin: 2.5% 0;
    width: 100%;
    @media ${(props) => props.theme.mobile}{
        display: none;
    }
`
    
const DeskCol = styled(Col)`
    padding: 2%;
    position: relative;
    display: block;
    flex: 1 1 0px;
    transition: transform 500ms;
`