import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button/Button';
import ListSlider from '../components/ListSlider';
import Header from '../components/Header';
import CreateButton from '../components/Button/CreateButton';

// 슬라이더 클릭 한번당 움직일 px
const SLIDE = 295;

function ListPage() {
  const [movePopularSlider, setMovePopularSlider] = useState(0);
  const [moveRecentSlider, setMoveRecentSlider] = useState(0);
  const popularSlider = useRef(null);
  const recentSlider = useRef(null);
  const popularSliderValue = 'popular';
  const recentSliderValue = 'recent';
  const nav = useNavigate();

  const moveToPost = () => {
    nav('/post');
  };

  // 슬라이더 버튼 구분을 위한 함수
  const handleClickNext = (state, value) => {
    if (value === 'popular') {
      const moveNext = state - SLIDE;
      setMovePopularSlider(moveNext);
    }

    if (value === 'recent') {
      const moveNext = state - SLIDE;
      setMoveRecentSlider(moveNext);
    }
  };

  // 슬라이더 버튼 구분을 위한 함수
  const handleClickPrev = (state, value) => {
    if (value === 'popular') {
      const movePrev = state + SLIDE;
      setMovePopularSlider(movePrev);
    }

    if (value === 'recent') {
      const movePrev = state + SLIDE;
      setMoveRecentSlider(movePrev);
    }
  };

  return (
    <>
    <Header
    event={
      <CreateButton
        onClick={() => nav('/post')}
        text={'롤링 페이퍼 만들기'}
      />
    }
  />
    <StyleContainer>
      <ListSlider
        title="인기 롤링 페이퍼 🔥"
        moveSlider={movePopularSlider}
        sliderRef={popularSlider}
        clickNext={handleClickNext}
        clickPrev={handleClickPrev}
        value={popularSliderValue}
      />
      <ListSlider
        title="최근에 만든 롤링 페이퍼 ⭐️"
        moveSlider={moveRecentSlider}
        sliderRef={recentSlider}
        clickNext={handleClickNext}
        clickPrev={handleClickPrev}
        value={recentSliderValue}
      />
      <StyleSection className="button-section">
        <Button text="나도 만들어보기" onClick={moveToPost} />
      </StyleSection>
    </StyleContainer>
    </>
  );
}

export default ListPage;

// Styled-Components
const StyleContainer = styled.div`
  width: 100%;
  max-width: 1201px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  .button-section {
    width: 1201px;
    height: 104px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyleSection = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;
