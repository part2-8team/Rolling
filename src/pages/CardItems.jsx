import styled from 'styled-components';
import Card from './Card';
import React, { useEffect, useState } from 'react';
import {  } from '../api/etcApi';
import {  } from '../api/recipientApi';


const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 120rem;
  margin: 0rem auto 0rem;
  padding-bottom: 12.7rem;
  gap: 2.4rem 2%;

  @media (max-width: 1247px) {
    margin-left: 2.4rem;
    margin-right: 2.4rem;
  }
  @media (min-width: 360px) and (max-width: 767px) {
    margin: 0rem 2.4rem 0rem;
  }
`;

const CardPlus = styled.div`
  display: ${({ $isDisplay }) => ($isDisplay ? ' none' : 'block')};
  justify-content: center;
  position: relative;
  transition: all 0.5s ease-out;
  &:hover {
    transform: translateY(-1.2rem);
}

@media (min-width: 768px) and (max-width: 1247px) {
  max-width: 1247px;
  width: 49%;
}
@media (max-width: 768px) {
  max-width: 768px;
  min-width: 32rem;
  width: 100%;
`;

const Plus = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  padding: 1.6rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10rem;
  background: var(--gray500);
`;

function CardItems({ data }) {

  return (
    <CardContainer>
      <CardPlus
        onClick={() => navigate(`/post/${data.id}/message`)}
        $isDisplay={isEditRoute}
      >
        <Plus>
          <img src="" alt="+" />
        </Plus>
      </CardPlus>
      {message &&
        message.map((message) => {
          <Card
            key={message.id}
            id={message.id}
            src={message.profileImageURL}
            name={message.sender}
            cardFont={message.font}
            userState={message.relationship}
            cardContent={message.content}
            cardCreatedAt={message.createdAt}
            onDelete={DeleteMessage}
          />;
        })}
    </CardContainer>
  );
}

export default CardItems;
