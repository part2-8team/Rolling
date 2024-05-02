import styled from 'styled-components';
import { bold14, bold16 } from '../styles/fontSize';

import logo from '../assets/img-logo.svg';

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const nav = useNavigate();
  return (
    <HeaderStyledContainer>
      <div className="Header">
        <div className="headerContent">
          <img
            className="logo"
            src={logo}
            alt="Rolling_메인화면으로"
            onClick={() => {
              nav('/');
            }}
          />
          <button
            onClick={() => {
              nav('/post');
            }}
          >
            롤링 페이퍼 만들기
          </button>
        </div>
      </div>
    </HeaderStyledContainer>
  );
}

export default Header;

// CSS
const HeaderStyledContainer = styled.div`
  .Header {
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

    .headerContent {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 1200px;
      margin: 0 auto;
    }

    .logo {
      cursor: pointer;
      height: 30px;
      width: 107px;
    }

    button {
      ${bold16}
      color: var(--gray900);
      border: 1px solid var(--gray300);
      border-radius: 6px;
      background-color: var(--white);
      padding: 7px 16px;
      cursor: pointer;
    }

    @media (max-width: 1200px) {
      .headerContent {
        width: 100%;
        padding: 0 24px;
      }
    }

    @media (max-width: 360px) {
      .headerContent {
        padding: 0 20px;
      }
      button {
        ${bold14}
      }
    }
  }
`;
