import styled from 'styled-components';
import Card from './Card';
import React from 'react';

function CardItems({ data }) {
  return (
    <CardContainer>
      <CardPlus>
        <Plus>
          <img src="" alt="+" />
        </Plus>
      </CardPlus>
      {message &&
        message.map((message) => {
          <Card />;
        })}
    </CardContainer>
  );
}

export default CardItems;
