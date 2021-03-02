import React from 'react';
import styled from 'styled-components';

export default function productLabel({text1, text2}) {
  return (
      <Label>{text1}<br/>{text2}</Label>
  );
}
const Label = styled.label`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 10px;
  margin-top: .5rem;
  text-align: center;
`;