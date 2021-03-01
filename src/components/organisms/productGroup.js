import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Row, Col } from 'react-bootstrap';

import Product from '../molecules/card.js';

export default function ProductGroup() {

    return (
        <Container>
            <Row>
                <Col xs={6} md={3}>
                    <Product path={'https://smartstore.naver.com/my_doodle/products/5254327538'}
                        name={'/productImage/slim.jpg'}
                        text={'[슬림형] 아이그림 주문제작 폰케이스'} />
                </Col>
                <Col xs={6} md={3}>
                    <Product path={'https://smartstore.naver.com/my_doodle/products/5362152100'}
                        name={'/productImage/bumper.jpg'}
                        text={'[범퍼형] 아이그림 주문제작 폰케이스'} />
                </Col>
                <Col xs={6} md={3}>
                    <Product path={'https://smartstore.naver.com/my_doodle/products/5362172389'}
                        name={'/productImage/card.jpg'}
                        text={'[카드형] 아이그림 주문제작 폰케이스'} />
                </Col>
                <Col xs={6} md={3}>
                    <Product path={'https://smartstore.naver.com/my_doodle/products/5265774469'}
                    name={'/productImage/smartTok.jpg'}
                        text={'[그립톡] 아이그림 주문제작 그립톡'} />
                </Col>
            </Row>
        </Container>
    );
}