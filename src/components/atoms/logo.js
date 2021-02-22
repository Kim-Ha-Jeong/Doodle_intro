import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export default function Logo() {
    return (
        <Wrapper>
            <Link href='/'>
                <a>
                    <LogoImage src='/logo.png' />
                </a>
            </Link>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    max-width: 35%;
`;
const LogoImage = styled.img`
    width: 75%;
    display: block;
    margin: 13% 20%;
`