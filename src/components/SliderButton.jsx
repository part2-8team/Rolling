import styled from 'styled-components';

function SliderButton({ className, src, alt, onClick }) {
  return (
    <StyleSliderButton className={className} onClick={onClick}>
      <img src={src} alt={alt} />
    </StyleSliderButton>
  );
}

export default SliderButton;

// styled-Components

const StyleSliderButton = styled.button`
  position: absolute;

  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  outline: 0;
  border: 0;
  border: 1px solid #dadcdf;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.9;

  box-shadow: 0px 4px 8px 0px #00000014;

  z-index: 1;
  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
  }
`;
