import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import { regular16, bold18, bold28 } from '../../styles/fontSize';
import { DISPLAY_SIZE } from '../../utils/PAGE_SIZE';
import Propile from '../Propile';
import share24 from '../../assets/share24.svg';
import Toast from '../Modal/Toast';
import ShareToggle from '../Modal/ShareToggle';
import ModalPortal from '../Modal/ModalPortal';
import EmojiDropDown from '../EmojiDropDown';

const NavWapper = styled.div`
  width: 100%;
  background-color: var(--white);
  position: sticky;
  top: 6.5rem;
  z-index: 9999;

  @media (max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
    top: 0;
  }
`;

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


const Vertical1 = styled.div`
width: 0.1rem;
  height: 2.8rem;
  background-color: var(--gray200);
  line-height: 27px;
  margin: 0 2.8rem;

  @media (max-width: 1023px) {
    display: none;
  }
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
  }
`;

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
  }
`;

const ShareWrapper = styled.div`
  position: absolute;
  top: 4.5rem;
  right: 0.2rem;
  z-index: 9999;
`;

const Container = styled(ToastContainer)`
  .Toastify__toast {
    font-size: 1.6rem;
    padding: 1.9rem 3rem;
    color: var(--white);
    align-items: center;
    justify-content: center;
    width: 52.4rem;
    margin: 0 auto;
    right: 33%;
  }

  .Toastify__toast-icon {
    width: 2.4rem;
    height: 2.4rem;
  }

  .Toastify__toast--success {
    background: var(--black);
  }
`;

function Nav({ name, peopleNum, profileUrl }) {
  const [shareToggle, setShareToggle] = useState(false);
  const [isKakaoOpen, setIsKakaoOpen] = useState(false);
  const [isUrlCopy, setIsUrlCopy] = useState(false);
  const ref = useRef();

  const OutsideClick = (e) => {
    if (shareToggle && (!ref.current || !ref.current.contains(e.target))) {
      setShareToggle(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', OutsideClick);
    return () => {
      window.removeEventListener('click', OutsideClick);
    };
  }, [shareToggle]);

  const ClickShare = (e) => {
    e.preventDefault();
    setShareToggle(!shareToggle);
  };

  return (
    <NavWapper>
      <NavContainer>
        <Name>To.{name}</Name>
        <PostIdData>
          <Written>
            <Propile profileUrl={profileUrl} peopleNum={peopleNum} />
            {peopleNum}명이 작성했어요!
          </Written>
          <Vertical1 />
          <EmojiDropDown isNav={true}/>
          <Vertical2 />
          <ShareButton ref={ref} onClick={ClickShare}>
            <img src={share24} alt="공유하기버튼" />
          </ShareButton>
          {shareToggle && (
            <ShareWrapper>
              <ShareToggle
                setIsKakaoOpen={setIsKakaoOpen}
                setIsUrlCopy={setIsUrlCopy}
              />
            </ShareWrapper>
          )}
          {isKakaoOpen && (
            <ModalPortal>
              <KakaoModal />
            </ModalPortal>
          )}
          {isUrlCopy && (
            <ModalPortal>
              <Container limit={1} />
              <Toast />
            </ModalPortal>
          )}
        </PostIdData>
      </NavContainer>
    </NavWapper>
  );
}

export default Nav;
