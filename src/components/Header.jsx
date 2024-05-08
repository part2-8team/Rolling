import styled from 'styled-components';
import logo from '../assets/logo.svg';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header({ event }) {
  const nav = useNavigate();
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoImg
          src={logo}
          alt="Rolling_메인화면으로"
          onClick={() => {
            nav('/');
          }}
        />
        <div>{event}</div>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;

// CSS
const HeaderContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--gray300);
  height: 64px;
  z-index: 10;
  background-color: var(--white);
`;

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1200px;
    margin: 0 auto;

    @media (max-width: 1200px) {
      width: 100%;
      padding: 0 24px;
  }

    @media (max-width: 360px) {
      padding: 0 20px;
  `;

const LogoImg = styled.img`
  cursor: pointer;
  height: 30px;
  width: 107px;
`;
