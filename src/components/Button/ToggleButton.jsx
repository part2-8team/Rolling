import React, { useState } from 'react';

//이미지
import colorToggle from '../../assets/colorToggle.svg';
import ImgToggle from '../../assets/imgToggle.svg';
import switchImgToggle from '../../assets/switchImgToggle.svg';
import switchColorToggle from '../../assets/switchcolorToggle.svg';
import colorYellow from '../../assets/colorYellow.png';
import colorPink from '../../assets/colorPink.png';
import colorBlue from '../../assets/colorBlue.png';
import colorGreen from '../../assets/colorGreen.png';
import background_img1 from '../../assets/background-img1.jpg';
import background_img2 from '../../assets/background-img2.jpg';
import background_img3 from '../../assets/background-img3.jpg';
import background_img4 from '../../assets/background-img4.jpg';

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
  ${({ withBorderRadius }) => withBorderRadius && 'border-radius: 20px;'}
`;


const ToggleButton = () => {
  const [isColorActive, setIsColorActive] = useState(true);
  const [isImageActive, setIsImageActive] = useState(false);

  const handleButtonClick = () => {
    setIsColorActive(!isColorActive);
    setIsImageActive(!isImageActive);
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
      {isColorActive && !isImageActive && (
        <ColorCardGroup>
          <ColorCard src={colorYellow} alt="노란색 배경화면" />
          <ColorCard src={colorPink} alt="분홍색 배경화면" />
          <ColorCard src={colorBlue} alt="파란색 배경화면" />
          <ColorCard src={colorGreen} alt="초록색 배경화면" />
        </ColorCardGroup>
      )}
      {!isColorActive && isImageActive && (
        <ColorCardGroup>
          <ColorCard src={background_img1} alt="암벽이 보이는 도로를 달리는 자동차 배경화면" withBorderRadius />
          <ColorCard src={background_img2} alt="드넓은 대지가 보이는 도로를 달리는 자동차 배경화면" withBorderRadius />
          <ColorCard src={background_img3} alt="노을진 바다 배경화면" withBorderRadius />
          <ColorCard src={background_img4} alt="식물이 있는 카페 배경화면" withBorderRadius />
        </ColorCardGroup>
      )}
    </>
  );
};


export default ToggleButton;
