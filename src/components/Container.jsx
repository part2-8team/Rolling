import React, { useState } from 'react';
import { createRecipient } from '../api/recipientApi';
import { bold18 } from '../styles/fontSize';
import { useNavigate } from 'react-router-dom'; // URL 이동

//컴포넌트
import ToggleButton from './Button/ToggleButton';

//이미지
import colorToggle from '../assets/colorToggle.svg';
 import ImgToggle from '../assets/imgToggle.svg';

//스타일
import styled, { createGlobalStyle } from 'styled-components';
import { regular16, regular12, bold24 } from '../styles/fontSize';

const MainContainer = styled.main`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
`;

const MainToContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 720px;
  height: 104px;
  margin: 0 auto;
  margin-top: 114px;
  @media (max-width: 768px) {
    width: 720px;
    
  }

  @media (max-width: 600px) {
    width: 380px;
  }
  
`;

const ToUser = styled.h1`
  width: 34px;
  height: 42px;
  ${bold24}

  @media (max-width: 768px) {
    width: 34px;
    height: 42px;
    position: relative;
    left: 35px;
  }

  @media (max-width: 600px) {
    width: 34px;
    height: 42px;
  }
`;

const ToInput = styled.input`
  display: flex;
  flex-shrink: 0;
  width: 720px;
  height: 50px;
  border-radius: 8px;
  border: 1px solid
    ${({ isError, value }) => (isError && !value ? 'var(--error)' : '#cccccc')}; // value가 빈 문자열일 때 error 색상 적용
  padding: 12px 16px 12px 16px;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  &::placeholder {
    width: 688px;
    height: 26px;
    ${regular16}
  }

  @media (max-width: 768px) {
    width: 630px;
    position: relative;
    left: 35px;
  }

  @media (max-width: 600px) {
    width: 350px;
    font-size: 24px;
  }
`;

const ErrorMessage = styled.div`
  position: absolute;
  bottom: -20px;
  width: 320px;
  height: 18px;
  left: 0;
  ${regular12};
  color: var(--error);

  @media (max-width: 768px) {
    bottom: 0px;
    position: relative;
    left: 35px;
  }

  @media (max-width: 600px) {
    bottom: 0px;
    position: relative;
    left: 35px;
  }
`;

// 배경화면 선택 문구
const BackgroundChooseContainer = styled.div`
  width: 301px;
  height: 66px;
  margin-top: 50px;

  @media (max-width: 768px) {
    margin-top: 50px;
    position: relative;
    left: 35px;
  }

  @media (max-width: 600px) {
    margin-top: 30px;
    position: relative;
    left: 35px;
  }
`;
const BackgroundChooseTitleText = styled.h1`
  width: 243px;
  height: 36px;
  margin-bottom: 4px;
  ${bold24};
`;
const BackgroundChooseSubText = styled.p`
  width: 301px;
  height: 26px;
  ${regular16};
`;

// 생성하기 버튼

const ButtonGroup = styled.div`
  width: 720px;
  height: 56px;

  @media (max-width: 768px) {
    position: relative;
    top: 100px;
    width: 768px;
  }

  @media (max-width: 600px) {
    position: relative;
    top: 10px;
    left: 10px;
  }
`;

const CreateButton = styled.button`
  width: 720px;
  height: 56px;
  margin-top: 69px;
  border-radius: 12px;
  background-color: ${({ disabled }) => (disabled ? '#cccccc' : 'var(--purple600)')}; /* 비활성화, 활성화 시 생성하기 버튼의 색상 */
  ${bold18}
  color: #FFFFFF;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  @media (max-width: 768px) {
    width: 680px;
    position: relative;
    left: 20px;
  }

  @media (max-width: 600px) {
    width: 320px;
    position: relative;
  }
`;


// 함수 컴포넌트
const Container = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});
  const navigate = useNavigate();

  const handleBlur = () => {
    setError(!inputValue);
  };

  const handleSubmit = async () => {
    if (!inputValue) {
      setError(true);
      return null; // 입력값이 없으면 null 반환
    }
  
    try {
      const selectedColor = 'beige';
      
  
      const data = {
        name: inputValue,
        backgroundColor: selectedImage?.backgroundColor || selectedColor,
        backgroundImageURL: selectedImage?.backgroundImageURL || null
      };
  
      const response = await createRecipient(data);
  
      console.log('메세지가 생성되었습니다:', data);
  
      setInputValue('');
  
      // 생성된 페이지의 ID 반환
      return response.id;
    } catch (error) {
      console.error('메세지를 생성하는데 오류 발생:', error.message);
      setError(true);
      return null; // 오류 발생시 null 반환
    }
  };

  const handleCreateRecipient = async () => {
    const id = await handleSubmit(); // 생성된 페이지의 ID 받아오기
    if (id) {
      navigate(`/post/${id}`); // 생성된 페이지로 이동
    }
  };


  return (
    <MainContainer>
      <MainToContainer>
        <ToUser>To.</ToUser>
        <ToInput
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={handleBlur}
          placeholder="받는 사람 이름을 입력해 주세요"
          isError={error}
        />
        {error && !inputValue && (
          <ErrorMessage>값을 입력해 주세요.</ErrorMessage>
        )}
        <BackgroundChooseContainer>
          <BackgroundChooseTitleText>
            배경화면을 선택해 주세요.
          </BackgroundChooseTitleText>
          <BackgroundChooseSubText>
            컬러를 선택하거나, 이미지를 선택할 수 있습니다.
          </BackgroundChooseSubText>
        </BackgroundChooseContainer>
        <ToggleButton onSubmit={({ backgroundColor, backgroundImageURL }) => setSelectedImage({ backgroundColor, backgroundImageURL })} />
        <ButtonGroup>
          <CreateButton disabled={!inputValue || !selectedImage} onClick={handleCreateRecipient}>
            생성하기
          </CreateButton>
        </ButtonGroup>
      </MainToContainer>
    </MainContainer>
  );
}

export default Container;


