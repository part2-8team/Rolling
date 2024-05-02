import styled from 'styled-components';
import Card from './Card';
import React from 'react';

const CardContainer = styled.div`

`

const CardPlus = styled.div`

`

const Plus = styled.div`

`


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
