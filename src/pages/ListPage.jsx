import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SliderTitle from '../components/SliderTitle';
import Button from '../components/Button/Button';
import SliderButton from '../components/SliderButton';
import arrowRight from '../assets/arrow-right.svg';
import arrowLeft from '../assets/arrow-left.svg';

// mock 데이터 요소 추가, 삭제 가능
const sliderCards = [1, 2, 3, 4, 5];
// 슬라이더 클릭 한번당 움직일 px
const SLIDE = 295;

function ListPage() {
  const [movePopularSlider, setMovePopularSlider] = useState(0);
  const [moveRecentSlider, setMoveRecentSlider] = useState(0);
  const nav = useNavigate();
  const popularSlider = useRef(null);
  const recentSlider = useRef(null);

  const sliderWidth = SLIDE * sliderCards.length - 20;
  const sliderEnd = (sliderCards.length - 4) * -SLIDE;

  const isPopularPrev = movePopularSlider >= 0 ? false : true;
  const isPopularNext =
    sliderEnd >= 1 ? false : movePopularSlider === sliderEnd ? false : true;

  const isRecentPrev = moveRecentSlider >= 0 ? false : true;
  const isRecentNext =
    sliderEnd >= 1 ? false : moveRecentSlider === sliderEnd ? false : true;

  const moveToPost = () => {
    nav('/post');
  };

  const onClickPopularNext = () => {
    setMovePopularSlider(movePopularSlider - SLIDE);
  };

  const onClickPopularPrev = () => {
    setMovePopularSlider(movePopularSlider + SLIDE);
  };

  const onClickRecentNext = () => {
    setMoveRecentSlider(moveRecentSlider - SLIDE);
  };

  const onClickRecentPrev = () => {
    setMoveRecentSlider(moveRecentSlider + SLIDE);
  };

  useEffect(() => {
    popularSlider.current.style.transform = `translateX(${movePopularSlider}px)`;
    recentSlider.current.style.transform = `translateX(${moveRecentSlider}px)`;
  }, [movePopularSlider, moveRecentSlider]);

  return (
    <StyleContainer>
      <StyleSection>
        <SliderTitle title="인기 롤링 페이퍼 🔥" />
        {isPopularPrev && (
          <SliderButton
            className="prev-button"
            src={arrowLeft}
            alt="이전 버튼"
            onClick={onClickPopularPrev}
          />
        )}
        <StyleSliderWrap>
          <StyleSlider ref={popularSlider} width={sliderWidth}>
            {sliderCards.map((card) => (
              <StyleSliderCard key={card}>{card}</StyleSliderCard>
            ))}
          </StyleSlider>
        </StyleSliderWrap>
        {isPopularNext && (
          <SliderButton
            className="next-button"
            src={arrowRight}
            alt="다음 버튼"
            onClick={onClickPopularNext}
          />
        )}
      </StyleSection>
      <StyleSection>
        <SliderTitle title="최근에 만든 롤링 페이퍼 ⭐️️" />
        {isRecentPrev && (
          <SliderButton
            className="prev-button"
            src={arrowLeft}
            alt="이전 버튼"
            onClick={onClickRecentPrev}
          />
        )}
        <StyleSliderWrap>
          <StyleSlider ref={recentSlider} width={sliderWidth}>
            {sliderCards.map((card) => (
              <StyleSliderCard key={card}>{card}</StyleSliderCard>
            ))}
          </StyleSlider>
        </StyleSliderWrap>
        {isRecentNext && (
          <SliderButton
            className="next-button"
            src={arrowRight}
            alt="다음 버튼"
            onClick={onClickRecentNext}
          />
        )}
      </StyleSection>
      <StyleSection className="button-section">
        <Button text="나도 만들어보기" onClick={moveToPost} />
      </StyleSection>
    </StyleContainer>
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

  position: relative;

  .prev-button {
    top: 50%;
    left: -20px;
  }

  .next-button {
    top: 50%;
    right: 20px;
  }
`;

const StyleSliderWrap = styled.div`
  width: 1160px;
  height: 262px;

  position: relative;
  overflow: hidden;
`;

const StyleSlider = styled.ul`
  width: ${({ width }) => width}px;
  height: 260px;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  transition: all 0.5s ease-in;
`;

const StyleSliderCard = styled.li`
  width: 275px;
  height: 260px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #0000001a;
  border-radius: 16px;
  box-shadow: 0px 2px 12px 0px #00000014;
  transition: 0.5 ease-out;

  &:not(:first-child) {
    margin-left: 20px;
  }
`;
