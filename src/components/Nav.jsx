import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { regular16, bold18, bold28 } from '../styles/fontSize';
import { DISPLAY_SIZE } from '../utils/PAGE_SIZE';
import Frame2356 from '../assets/Frame2356.png';
import Group27 from '../assets/Group27.png';
import share24 from '../assets/share24.svg';
import add24 from '../assets/add24.svg';

const NavWapper = styled.div`
width: 100%;
background-color: var(--white);
position: sticky;
top: 6.5rem;
z-index: 9999;

@media (max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
  top: 0;
}
`

const NavContainer = styled.div`
box-sizing: border-box;
  display: flex;
  max-width: 120rem;
  margin: 0 auto;
  padding: 1.3rem 0;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${DISPLAY_SIZE.MIN_TABLET}px) and (max-width: ${DISPLAY_SIZE.MAX_TABLET}px) {
    margin: 0 2.4rem;
  }
  @media (max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
    display: block;
    padding: 0;
  }
`;

const Name = styled.div`
color: var(--gray800);
${bold28}

@media (min-width: 470px) and (max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
  padding: 1.2rem 2rem;
}
@media (max-width: 469px) {
  padding: 1.2rem 2rem;
  color: var(--gray800);

  ${bold18}
}
`;

const PostIdData = styled.div`
display: flex;
align-items: center;
position: relative;
justify-content: flex-end;

@media (max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
  margin-left: 2.4rem;
  margin-right: 2.4rem;
  padding: 0.8rem 0rem;
}
@media (max-width: 469px) {
  margin-left: 2rem;
  margin-right: 2rem;
}
`;

const Written = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 1.1rem;
color: var(--gray900);
${bold18}

@media (max-width: 1023px) {
  display: none;
}
`;

const WrittenByIcons = styled.img`
display: flex;
justify-content: center;
align-items: center;
width : 7.6rem;
height : 2.8rem;
gap : 1.1 rem
`;

const Vertical1 = styled.div`
width: 0.1rem;
  height: 2.8rem;
  background-color: var(--gray200);
  line-height: 27px;
  margin: 0 2.8rem;

  @media (max-width: 1023px) {
    display: none;
`;

const Vertical2 = styled.div`
width: 0.1rem;
  height: 2.8rem;
  background-color: var(--gray200);
  line-height: 27px;
  margin: 0 1.3rem;
  @media (max-width: 469px) {
    margin: 0 0.5rem;
    background-color: var(--white);
`;

const EmojiDropDown = styled.img`
display: flex;
justify-content: center;
align-items: center;
width : 24.6rem;
height : 3.6rem;
gap : 1.1 rem
`
const EmojiButton = styled.button`
border-radius: 0.6rem;
background: var(--${({ disabled }) => (disabled ? 'gray300' : 'white')});
color: var(--${({ disabled }) => (disabled ? 'white' : 'gray900')});
border: 1px solid var(--gray300);
${regular16}

&:hover:enabled {
  background: var(--gray100);
}

&:active:enabled {
  background: var(--gray100);
}

&:focus:enabled {
  border: 1px solid var(--gray500);
}
display: flex;
justify-content: center;
align-items: center;
width : 8.8rem;
height : 3.6rem;
gap : 1.1 rem
`
const ShareButton = styled.button`
border-radius: 0.6rem;
background: var(--${({ disabled }) => (disabled ? 'gray300' : 'white')});
color: var(--${({ disabled }) => (disabled ? 'white' : 'gray900')});
border: 1px solid var(--gray300);
${regular16}

&:hover:enabled {
  background: var(--gray100);
}

&:active:enabled {
  background: var(--gray100);
}

&:focus:enabled {
  border: 1px solid var(--gray500);
}
padding: 0.6rem 1.6rem;

  @media (max-width: 470px) {
    padding: 0.6rem 0.8rem;
  }
  @media (max-width: 371px) {
    padding: 0.5rem;
  }`;

function Nav() {
  return (
    <NavWapper>
      <NavContainer>
        <Name>To.주강산</Name>
        <PostIdData>
          <Written>
            <WrittenByIcons src={Group27}/>
            37명이 작성했어요!
          </Written>
          <Vertical1 />
          <EmojiDropDown src={Frame2356}/>
          <EmojiButton>
          <img src={add24} alt="이모지 추가 버튼" />추가
          </EmojiButton>
          <Vertical2 />
          <ShareButton>
            <img src={share24} alt="공유하기버튼" />
          </ShareButton>
        </PostIdData>
      </NavContainer>
    </NavWapper>
  );
}

export default Nav;
