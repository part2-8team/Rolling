import React, { useState, useEffect } from 'react';
import { getBackgroundImages } from '../../api/etcApi';

//이미지
import colorToggle from '../../assets/colorToggle.svg';
import ImgToggle from '../../assets/imgToggle.svg';
import switchImgToggle from '../../assets/switchImgToggle.svg';
import switchColorToggle from '../../assets/switchcolorToggle.svg';
import checkIcon from '../../assets/checkIcon.svg'; // 추가: 체크 아이콘 이미지
import colorYellow from '../../assets/colorYellow.png';
import colorPink from '../../assets/colorPink.png';
import colorBlue from '../../assets/colorBlue.png';
import colorGreen from '../../assets/colorGreen.png';


//스타일
import styled from 'styled-components';

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

const ColorCard = styled.div`
  width: 168px;
  height: 168px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
`;

const CheckIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

//함수 구현 부분

const ToggleButton = () => {
  const [isColorActive, setIsColorActive] = useState(true);
  const [isImageActive, setIsImageActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [backgroundImages, setBackgroundImages] = useState([]);

  // 배경 이미지 가져오기
  useEffect(() => {
    const fetchBackgroundImages = async () => {
      try {
        const images = await getBackgroundImages();
        setBackgroundImages(images);
      } catch (error) {
        console.error('Error fetching background images:', error);
      }
    };

    fetchBackgroundImages();
  }, []);

  const handleColorButtonClick = () => {
    setIsColorActive(true);
    setIsImageActive(false);
  };

  const handleImageButtonClick = () => {
    setIsColorActive(false);
    setIsImageActive(true);
  };

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  const handleConfirmButtonClick = () => {
    console.log(selectedImage);
  };

  return (
    <>
      <ChooseImgGroup>
        <ToggleImgButton onClick={handleColorButtonClick}>
          <ToggleImg
            src={isColorActive ? colorToggle : switchColorToggle}
            alt="컬러 선택"
            isActive={isColorActive}
          />
        </ToggleImgButton>
        <ToggleImgButton onClick={handleImageButtonClick}>
          <ToggleImg
            src={isColorActive ? ImgToggle : switchImgToggle}
            alt="이미지 선택"
            isActive={!isColorActive}
          />
        </ToggleImgButton>
      </ChooseImgGroup>
      {isColorActive && !isImageActive && (
        <ColorCardGroup>
          {/* 컬러 이미지 카드들 */}
          <ColorCard
            src={colorYellow}
            alt="노란색 배경화면"
            onClick={() => handleImageSelect(colorYellow)}
            style={{ borderRadius: '20px' }}
          >
            {selectedImage === colorYellow && <CheckIcon src={checkIcon} alt="선택됨" />}
          </ColorCard>
          <ColorCard
            src={colorPink}
            alt="분홍색 배경화면"
            onClick={() => handleImageSelect(colorPink)}
            style={{ borderRadius: '20px' }}
          >
            {selectedImage === colorPink && <CheckIcon src={checkIcon} alt="선택됨" />}
          </ColorCard>
          <ColorCard
            src={colorBlue}
            alt="파란색 배경화면"
            onClick={() => handleImageSelect(colorBlue)}
            style={{ borderRadius: '20px' }}
          >
            {selectedImage === colorBlue && <CheckIcon src={checkIcon} alt="선택됨" />}
          </ColorCard>
          <ColorCard
            src={colorGreen}
            alt="초록색 배경화면"
            onClick={() => handleImageSelect(colorGreen)}
            style={{ borderRadius: '20px' }}
          >
            {selectedImage === colorGreen && <CheckIcon src={checkIcon} alt="선택됨" />}
          </ColorCard>
        </ColorCardGroup>
      )}
      {!isColorActive && isImageActive && (
        <ColorCardGroup>
          {backgroundImages.map((imageUrl, index) => (
            <ColorCard
              key={index}
              src={imageUrl}
              alt={`배경화면 ${index + 1}`}
              onClick={() => handleImageSelect(imageUrl)}
              style={{ borderRadius: '20px' }}
            >
              {selectedImage === imageUrl && (
                <CheckIcon src={checkIcon} alt="선택됨" />
              )}
            </ColorCard>
          ))}
        </ColorCardGroup>
      )}
    </>
  );
};

export default ToggleButton;