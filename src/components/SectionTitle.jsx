import styled from 'styled-components';
import { bold24 } from '../styles/fontSize';

function SliderTitle({ title }) {
  return <StyleSliderTitle>{title}</StyleSliderTitle>;
}

export default SliderTitle;

// Styled-Components
const StyleSliderTitle = styled.h2`
  ${bold24}
`;
