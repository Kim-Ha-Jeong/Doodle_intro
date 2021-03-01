import React from 'react';
import styled from 'styled-components';

export default function productLabel({text}) {
  return (
      <Label>{text}</Label>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Label = styled.label`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 10px;
  font-weight: bold;
`;