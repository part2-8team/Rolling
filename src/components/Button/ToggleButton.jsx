import React, { useState, useEffect } from 'react';
import { getBackgroundImages } from '../../api/etcApi'; 
import { createRecipient } from '../../api/recipientApi';

//이미지
import colorToggle from '../../assets/colorToggle.svg';
import ImgToggle from '../../assets/imgToggle.svg';
import switchImgToggle from '../../assets/switchImgToggle.svg';
import switchColorToggle from '../../assets/switchcolorToggle.svg';
import checkIcon from '../../assets/checkIcon.svg'; 
import beige from '../../assets/beige.png';
import purple from '../../assets/purple.png';
import blue from '../../assets/blue.png';
import green from '../../assets/green.png';

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



const ToggleButton = ({ onSubmit, defaultColor = 'beige', defaultImage = null }) => {
  const [isColorActive, setIsColorActive] = useState(true);
  const [isImageActive, setIsImageActive] = useState(false);
  const [selectedColor, setSelectedColor] = useState(defaultColor); // 기본 선택 컬러
  const [selectedImage, setSelectedImage] = useState(defaultImage); // 기본 이미지 컬러
  const [backgroundImages, setBackgroundImages] = useState([]);

  // 배경 이미지 가져오기
  useEffect(() => {
    const fetchBackgroundImages = async () => {
      try {
        const images = await getBackgroundImages();
        setBackgroundImages(images);
  
        // 첫번 째 이미지를 선택값으로 지정
        if (images.length > 0) {
          setSelectedImage(images[0]);
          onSubmit({ backgroundColor: null, backgroundImageURL: images[0] }); // 부모 컴포넌트로 전달
        }
      } catch (error) {
        console.error('배경 이미지를 가져오는 중 오류 발생:', error);
      }
    };
  
    fetchBackgroundImages();
  }, []);

  // 컬러, 이미지 버튼 클릭 핸들러
  const handleColorButtonClick = () => {
    setIsColorActive(true);
    setIsImageActive(false);
  };

  const handleImageButtonClick = () => {
    setIsColorActive(false);
    setIsImageActive(true);
  };

  // 이미지 선택 핸들러
  const handleImageSelect = (image) => {
    setSelectedImage(image);
    setSelectedColor(null); // 이미지 선택 시 선택된 컬러 초기화
    onSubmit({ backgroundColor: null, backgroundImageURL: image }); // 선택된 이미지를 부모 컴포넌트로 전달
  };

  // 컬러값 배열
  const colors = [
    { color: 'beige', image: beige },
    { color: 'purple', image: purple },
    { color: 'blue', image: blue },
    { color: 'green', image: green },
  ];

  // 컬러 선택 핸들러
  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setSelectedImage(null); // 컬러 선택 시 선택된 이미지 초기화
    onSubmit({ backgroundColor: color, backgroundImageURL: null }); // 선택된 컬러를 부모 컴포넌트로 전달
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
          {colors.map((color) => (
            <ColorCard
              key={color.color}
              src={color.image}
              alt={`${color.color} 배경화면`}
              onClick={() => handleColorSelect(color.color)}
              style={{ borderRadius: '20px' }}
            >
              {selectedColor === color.color && <CheckIcon src={checkIcon} alt="선택됨" />}
            </ColorCard>
          ))}
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