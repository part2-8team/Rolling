import styled from 'styled-components';
import { bold24 } from '../styles/fontSize';

function SectionTitle({ title }) {
  return <StyleSliderTitle>{title}</StyleSliderTitle>;
}

export default SectionTitle;

// Styled-Components
const StyleSliderTitle = styled.h2`
  ${bold24}
`;
