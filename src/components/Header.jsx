import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { bold16 } from "../styles/fontSize";

import logo from "../assets/img-logo.svg";

function Header() {
  const nav = useNavigate();
  return (
    <HeaderStyledContainer>
      <div className="Header">
        <div className="header__content">
          <img
            className="logo"
            src={logo}
            alt="Rolling_메인화면으로"
            onClick={() => {
              nav("/");
            }}
          />
          <button
            onClick={() => {
              nav("/post");
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

    .header__content {
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
  }
`;
