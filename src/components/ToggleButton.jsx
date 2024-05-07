import React, { useState } from 'react';

//이미지
import colorToggle from '../assets/colorToggle.svg';
import ImgToggle from '../assets/imgToggle.svg';
import switchImgToggle from '../assets/switchImgToggle.svg';
import switchColorToggle from '../assets/switchcolorToggle.svg';
import colorYellow from '../assets/colorYellow.png';
import colorPink from '../assets/colorPink.png';
import colorBlue from '../assets/colorBlue.png';
import colorGreen from '../assets/colorGreen.png';

//스타일
import styled, { createGlobalStyle } from 'styled-components';

const ChooseImgGroup = styled.div`
  display: flex;
  margin-top: 24px;
  width: 244px;
  height: 40px;
  position: relative;
`;

const ToggleImgButton = styled.button`
  width: 122px;
  height: 40px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const ToggleImg = styled.img`
  background-color: ${({ isActive }) => (isActive ? 'transparent' : '#F6F6F6')};
`;

const ColorCardGroup = styled.div`
  width: 720px;
  height: 168px;
  display: flex;
  gap: 16px;
  padding-top: 40px;
`;

const ColorCard = styled.img`
  width: 168px;
  height: 168px;
`;

const ToggleButton = () => {
  const [isColorActive, setIsColorActive] = useState(true);

  const handleButtonClick = () => {
    setIsColorActive(!isColorActive);
  };

  return (
    <>
      <ChooseImgGroup>
        <ToggleImgButton onClick={() => handleButtonClick()}>
          <ToggleImg
            src={isColorActive ? colorToggle : switchColorToggle}
            alt="컬러 선택 버튼"
            isActive={isColorActive}
          />
        </ToggleImgButton>
        <ToggleImgButton onClick={() => handleButtonClick()}>
          <ToggleImg
            src={isColorActive ? ImgToggle : switchImgToggle}
            alt="이미지 선택 버튼"
            isActive={!isColorActive}
          />
        </ToggleImgButton>
      </ChooseImgGroup>
      {isColorActive && (
        <ColorCardGroup>
          <ColorCard src={colorYellow} alt="노란색 배경화면" />
          <ColorCard src={colorPink} alt="분홍색 배경화면" />
          <ColorCard src={colorBlue} alt="파란색 배경화면" />
          <ColorCard src={colorGreen} alt="초록색 배경화면" />
        </ColorCardGroup>
      )}
    </>
  );
};

export default ToggleButton;
