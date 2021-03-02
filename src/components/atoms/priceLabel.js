import React from 'react';
import styled from 'styled-components';

export default function productLabel({price}) {
  return (
      <Label>{price}</Label>
  );
}
const Label = styled.label`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 10px;
  font-weight: bold;
  margin-bottom: .5rem;
`;