import styled from 'styled-components';
import { useRef, useEffect, useState } from 'react';
import DeleteMessageButton from '../../button/DeleteMessageButton';
import ModalPortal from '../../modal/ModalPortal';
import CardModal from '../../modal/CardModal';
import {
  regular12,
  regular14,
  regular18,
  regular20,
} from '../../../styles/FontStyle';
import { DISPLAY_SIZE } from '../../../constants/SIZE_SET';
import { USER_STATE } from '../../../constants/COLOR_SET';

export const CardContentWrapper = styled.div`
  position: relative;
  max-width: 38.4rem;
  width: 32%;
  height: 28rem;
  justify-content: center;
  align-items: center;

  border-radius: 1.6rem;
  background: var(--white);
  box-shadow: 0rem 0.2rem 1.2rem 0rem rgba(0, 0, 0, 0.08);

  cursor: pointer;
  transition: all 0.5s ease-out;
  &:hover {
    transform: translateY(-1.2rem);
  }

  @media (min-width: ${DISPLAY_SIZE.MIN_TABLET}px) and (max-width: ${DISPLAY_SIZE.MAX_TABLET}px) {
    max-width: ${DISPLAY_SIZE.MAX_TABLET}px;
    width: 49%;
  }
  @media (max-width: ${DISPLAY_SIZE.MIN_TABLET}px) {
    max-width: ${DISPLAY_SIZE.MIN_TABLET}px;
    min-width: 32rem;
    width: 100%;
  }
`;

const CardContent = styled.div`
  margin: 2.8rem 2.4rem 2.4rem;
`;

const UserInfo = styled.div`
  display: flex;
  gap: 1.4rem;
`;

const UserPicture = styled.img`
  display: flex;
  width: 5.6rem;
  height: 5.6rem;
  align-items: center;

  border-radius: 10rem;
  border: 0.1rem solid var(--gray200);
  background: var(--white);
`;

const UserText = styled.div`
  display: block;
  position: relative;
  color: var(--black);
  ${regular20}
`;

const UserName = styled.span`
  font-weight: 700;
`;

const UserState = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0.15rem 0.8rem 0;
  margin-top: 0.6rem;
  width: 4.1rem;
  height: 2rem;
  text-align: center;
  align-items: center;
  border-radius: 0.4rem;
  background: ${({ $state }) =>
    USER_STATE[$state] ? USER_STATE[$state].background : 'defaultColor'};
  color: ${({ $state }) =>
    USER_STATE[$state] ? USER_STATE[$state].color : 'defaultColor'};

  ${regular14}
`;

const SplitHorizontal = styled.div`
  width: 100%;
  height: 0.1rem;
  background: var(--gray200);
  margin: 1.5rem auto;
`;

const CardContentTextContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const CardContentText = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--gray600);
  width: 100%;

  ${regular18}

  flex-wrap: wrap;
`;

const CardCreatedAt = styled.div`
  position: absolute;
  left: 2.4rem;
  bottom: 2.4rem;

  color: var(--gray400);
  ${regular12}
`;

function Card({
  id,
  src,
  name,
  cardFont,
  userState = '친구',
  cardContent = '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!',
  cardCreatedAt = '2023.07.08',
  onDelete,
}) {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const ref = useRef();

  const handleOutsideClick = (e) => {
    if (isCardOpen && (!ref.current || !ref.current.contains(e.target))) {
      setIsCardOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [isCardOpen]);

  const handleClickCard = (e) => {
    e.preventDefault();
    setIsCardOpen(!isCardOpen);
  };

  const createdDays = new Date(cardCreatedAt);

  const fontClass = {
    'Noto Sans': 'noto-sans',
    Pretendard: 'pretendard',
    나눔명조: 'nanum-gothic',
    '나눔손글씨 손편지체': 'nanum-myeongjo',
  };

  const font = fontClass[cardFont] || '';

  return (
    <CardContentWrapper ref={ref} onClick={handleClickCard}>
      <CardContent>
        <UserInfo>
          <UserPicture src={src} alt="프로필" />
          <UserText>
            From. <UserName>{name}</UserName>
            <UserState $state={userState}>{userState}</UserState>
          </UserText>
          <DeleteMessageButton id={id} onDelete={onDelete} />
        </UserInfo>
        <SplitHorizontal />
        <CardContentTextContainer>
          <CardContentText
            dangerouslySetInnerHTML={{ __html: cardContent }}
            className={font}
          />
        </CardContentTextContainer>

        <CardCreatedAt>
          {`${createdDays.getFullYear()}. ${
            createdDays.getMonth() + 1
          }. ${createdDays.getDate()}`}
        </CardCreatedAt>
      </CardContent>
      {isCardOpen && (
        <ModalPortal>
          <CardModal
            onClick={(e) => handleOutsideClick(e)}
            id={id}
            src={src}
            name={name}
            cardFont={cardFont}
            userState={userState}
            cardContent={cardContent}
            cardCreatedAt={cardCreatedAt}
          />
        </ModalPortal>
      )}
    </CardContentWrapper>
  );
}
export default Card;