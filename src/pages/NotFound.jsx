import styled from 'styled-components';
import Header from '../components/Header';
import { useState } from 'react';
import notFoundImage from '../assets/404.png';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router';
import { bold28, regular24 } from '../styles/fontSize';

const StyleContainer = styled.main`
  width: 100%;
  height: 100%;
  margin-top: 64px;
  padding: 9rem 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyleSection = styled.section`
  width: 350px;
  height: 410px;
  display: flex;
  align-items: center;
  border: 1px solid #0000001a;
  box-shadow: 0px 2px 12px 0px #00000014;
  border-radius: 16px;
  transition: all 0.1s;
  position: relative;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: linear-gradient(to top, #ab57ff 0%, #9935ff 100%);
`;

const StyleOverlay = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 320px;
  height: 410px;
  background: linear-gradient(
    105deg,
    transparent 40%,
    rgba(255, 219, 112, 0.8) 45%,
    rgba(132, 50, 255, 0.3) 50%,
    transparent 54%
  );
  filter: brightness(1.1);
  mix-blend-mode: color-dodge;
  background-size: 150% 150%;
  background-position: 100%;
  transition: all 0.1s;
`;

const StyleDescription = styled.section`
  width: 100%;
  height: 50%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  h1 {
    ${bold28}
    font-size: 3.8rem;
    letter-spacing: -0.03rem;
  }

  p {
    ${regular24}
    font-size: 1.8rem;
    font-weight: 400;
  }
`;

const StyleBackground = styled.div`
  width: 100%;
  height: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

function NotFound() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [position, setPosition] = useState(0);
  const [filter, setFilter] = useState(0.8);
  const navigate = useNavigate();

  const cardTransform = {
    transform: `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
  };
  const cardBackgroundPosition = {
    backgroundPosition: `${position}%`,
    filter: `opacity(${filter})`,
  };
  const errorImage = { backgroundImage: `url(${notFoundImage})` };

  const handleMouseMove = (e) => {
    let x = e.nativeEvent.offsetX;
    let y = e.nativeEvent.offsetY;
    let rotateY = (-1 / 5) * x + 20;
    let rotateX = (4 / 30) * y - 20;
    let backgroundPosition = x / 5 + y / 5;
    setRotateX(rotateX);
    setRotateY(rotateY);
    setFilter(0.8);
    setPosition(backgroundPosition);

  };

  const handleMouseOut = () => {
    setRotateX(0);
    setRotateY(0);
    setFilter(0);
  };

  const moveToMain = () => {
    navigate('/');
  };
  return (
    <>
      <Header />
      <StyleContainer>
        <StyleSection
          onMouseMove={handleMouseMove}
          onMouseOut={handleMouseOut}
          style={cardTransform}
        >
          <StyleBackground style={errorImage} />
          <StyleOverlay style={cardBackgroundPosition} />
        </StyleSection>
        <StyleDescription>
          <h1>페이지가 없거나 접근할 수 없어요</h1>
          <p>입력하신 주소가 맞는지 다시 확인해주세요</p>
          <Button text="롤링 페이지 홈으로" onClick={moveToMain} />
        </StyleDescription>
      </StyleContainer>
    </>
  );
}

export default NotFound;
