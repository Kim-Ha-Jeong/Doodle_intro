import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Row, Col } from 'react-bootstrap';

import Card from '../molecules/productCard.js';

export default function ProductGroup() {

    return (
        <Wrapper>
            <Row>
                <Col xs={6} md={3}>
                    <Card path={'https://smartstore.naver.com/my_doodle/products/5254327538'}
                        name={'/productImage/slim.jpg'}
                        text1={'[슬림형] 아이그림'} 
                        text2={'주문제작 폰케이스'}
                        price={'19,600원'} />
                </Col>
                <Col xs={6} md={3}>
                    <Card path={'https://smartstore.naver.com/my_doodle/products/5362152100'}
                        name={'/productImage/bumper.jpg'}
                        text1={'[범퍼형] 아이그림'} 
                        text2={'주문제작 폰케이스'}
                        price={'24,500원'} />
                </Col>
                <Col xs={6} md={3}>
                    <Card path={'https://smartstore.naver.com/my_doodle/products/5362172389'}
                        name={'/productImage/card.jpg'}
                        text1={'[카드형] 아이그림'} 
                        text2={'주문제작 폰케이스'}
                        price={'29,600원'} />
                </Col>
                <Col xs={6} md={3}>
                    <Card path={'https://smartstore.naver.com/my_doodle/products/5265774469'}
                        name={'/productImage/smartTok.jpg'}
                        text1={'[그립톡] 아이그림'} 
                        text2={'주문제작 그립톡'}
                        price={'15,000원'} />
                </Col>
            </Row>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
`