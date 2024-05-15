import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import SliderButton from '../components/SliderButton';
import arrowRight from '../assets/arrow-right.svg';
import arrowLeft from '../assets/arrow-left.svg';
import { useEffect, useState } from 'react';
import SliderCard from './SLiderCard';
import { useNavigate } from 'react-router-dom';

const SLIDE = 295;

function ListSlider({
  title,
  moveSlider,
  clickNext,
  clickPrev,
  value,
  handleOnTouchStart,
  handleOnTouchMove,
  handleOnTouchEnd,
  cardItems,
}) {
  const navigate = useNavigate();
  const sliderWidth = SLIDE * cardItems.length - 20;
  const sliderEnd = (cardItems.length - 4) * -SLIDE;
  const sliderLength = cardItems.length;
  const isPrev = moveSlider >= 0 ? false : true;
  const isNext =
    sliderEnd >= 1 ? false : moveSlider === sliderEnd ? false : true;
  const translateX = { transform: `translateX(${moveSlider}px)` };

  const handleCardClick = (id) => {
    navigate(`/post/${id}`);
  };

  // 수정 예정
  const onClickNext = () => {
    clickNext(moveSlider, value, sliderEnd, sliderLength);
  };

  // 수정 예정
  const onClickPrev = () => {
    clickPrev(moveSlider, value);
  };

  // 터치 스와이프
  // 기능 수정 및 페이지네이션 기능 추가 예정
  const onTouchStart = (e) => {
    handleOnTouchStart(e);
  };

  const onTouchMove = (e) => {
    handleOnTouchMove(e);
  };

  const onTouchEnd = (e) => {
    const isTouches = e.touches[0];
    if (!isTouches) return;
    handleOnTouchEnd(e);
  };

  return (
    <StyleSection>
      <SectionTitle title={title} />
      {isPrev && (
        <SliderButton
          className="prev-button"
          src={arrowLeft}
          alt="이전 버튼"
          onClick={onClickPrev}
        />
      )}
      <StyleSliderWrap
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <StyleSlider width={sliderWidth} style={translateX}>
          {cardItems.map((card) => (
            <SliderCard
              key={card.id}
              profile={card.profile}
              {...card}
              handleCardClick={handleCardClick}
            />
          ))}
        </StyleSlider>
      </StyleSliderWrap>
      {isNext && (
        <SliderButton
          className="next-button"
          src={arrowRight}
          alt="다음 버튼"
          onClick={onClickNext}
        />
      )}
    </StyleSection>
  );
}

export default ListSlider;

// Styled-Component
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
  transition: transform 0.5s ease-in-out;
`;
