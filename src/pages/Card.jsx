import React from 'react';
import styled from 'styled-components';
import { useRef, useEffect, useState } from 'react';
// import DeleteButton from './DeleteButton';
// import Modal from './Modal';
// import CardModal from './CardModal';
import { regular12, regular14, regular18, regular20 } from '../styles/fontSize';

const USER_STATE = {
  가족: { background: 'var(--green100)', color: 'var(--green500)' },
  동료: { background: 'var(--purple100)', color: 'var(--purple600)' },
  지인: { background: 'var(--orange100)', color: 'var(--orange500)' },
  친구: { background: 'var(--blue100)', color: 'var(--blue500)' },
};

const CardContentWrapper = styled.div`
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
`;

const CardContent = styled.div`
  margin: 2.8rem 2.4rem 2.4rem;
`;

const UserInfo = styled.div`
  display: flex;
  gap: 1.4rem;
`;

const UserImg = styled.img`
  display: flex;
  width: 5.6rem;
  height: 5.6rem;
  align-items: center;

  border-radius: 10rem;
  border: 0.1rem solid var(--gray200);
  background: var(--white);
`;

const UserNameText = styled.div`
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

const CardContentText = styled.div`
  height: 100%;
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--gray600);

  ${regular18}

  flex-wrap: wrap;
`;

const CardDate = styled.div`
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
  const [isCardOnClick, setIsCardOnClick] = useState(false);
  const Ref = useRef(second);

  const OutsideClick = (e) => {
    if (isCardOpen && (!ref.current || !ref.current.contains(e.target))) {
      setIsCardOnClick(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', onClickOutside);
    return () => {
      window.removeEventListener('click', onClickOutside);
    };
  }, [isCardOnClick]);

  const onClickCard = (e) => {
    e.preventDefault();
    setIsCardOnClick(!isCardOnClick);
  };

  const createdDate = new Date(cardCreatedAt);

  const fontClass = {
    'Noto Sans': 'noto-sans',
    Pretendard: 'pretendard',
    나눔명조: 'nanum-gothic',
    '나눔손글씨 손편지체': 'nanum-myeongjo',
  };

  const font = fontClass[cardFont] || '';

  return (
    <CardContentWrapper Ref={Ref} onClick={onClickCard}>
      <CardContent>
        <UserInfo >
          <UserImg src={src} alt="프로필" />
          <UserNameText>
            Form.<UserName>${name}</UserName>
            <UserState $state={userState}>{userState}</UserState>
          </UserNameText>
          <DeleteButton id={id} onDelete={onDelete} />
        </UserInfo>
        <CardContentText className={font}>{cardContent}</CardContentText>
        <CardDate>
          {`${createdDate.getFullYear()}. ${
            createdDate.getMonth() + 1
          }. ${createdDate.getDate()}`}
        </CardDate>
      </CardContent>
      {isCardOnClick && (
        <Modal>
          <CardModal
            onClick={(e) => OutsideClick(e)}
            id={id}
            src={src}
            name={name}
            cardFont={cardFont}
            userState={userState}
            cardContent={cardContent}
            cardCreatedAt={cardCreatedAt}
          />
        </Modal>
      )}
    </CardContentWrapper>
  );
}
export default Card;
