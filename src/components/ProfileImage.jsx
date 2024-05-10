import React from 'react';
import styled from 'styled-components';

function ProfileImage({ imgUrl, size }) {
  return (
    <>
      <Container size={size}>
        <Image src={imgUrl}></Image>
      </Container>
    </>
  );
}

export default ProfileImage;

const Container = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: 1px solid var(--gray200);
  border-radius: 100%;
  cursor: pointer;
`;

const Image = styled.img.attrs({ alt: '프로필 이미지' })`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
