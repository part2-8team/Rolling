import styled from 'styled-components';
import Nav from '../components/PostId/Nav';
import { useEffect, useState } from 'react';
import { getRecipient } from '../api/recipientApi';
import Header from '../components/Header';
import CardItems from '../components/PostId/CardItems';
import { useNavigate, useParams } from 'react-router-dom';
import { bold16 } from '../styles/fontSize';

const BACKGROUND_COLOR = Object.freeze({
  beige: { background: 'var(--orange200)' },
  purple: { background: 'var(--purple200)' },
  green: { background: 'var(--green200)' },
  blue: { background: 'var(--blue200)' },
});

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  @media (max-width: 767px) {
    display: none;
  }
`;

const PostIdWrapper = styled.div`
  background-color: ${($props) => {
    const colorInfo = BACKGROUND_COLOR[$props.color];
    return colorInfo && colorInfo.background;
  }};
  background-image: url(${($props) => $props.image || 'none'});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

const EditCard = styled.div`
  display: flex;
  margin: 6.3rem auto 2.5rem;
  max-width: 120rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1247px) {
    margin: 6.3rem 2.4rem 2.5rem;
  }
  @media (max-width: 767px) {
    margin: 3rem 2.4rem 2.4rem;
  }
`;

const EditButton = styled.button`
  width: 9.2rem;
  height: 3.9rem;
  margin-top: 6.5rem;
  padding: 0.6rem 1.6rem;
  border-radius: 0.8rem;
  ${bold16}
  background: var(--${({ disabled }) => (disabled ? 'gray300' : 'purple600')});
  color: var(--white);

  &:hover:enabled {
    background: var(--purple700);
  }

  &:active:enabled {
    background: var(--purple800);
  }

  &:focus:enabled {
    background: var(--purple800);
  }
`;

const BackButton = styled.button`
  width: 9.2rem;
  height: 3.9rem;
  margin-top: 6.5rem;
  padding: 0.6rem 1.6rem;
  border-radius: 0.8rem;
  ${bold16}
  background: var(--${({ disabled }) => (disabled ? 'gray300' : 'purple600')});
  color: var(--white);

  &:hover:enabled {
    background: var(--purple700);
  }

  &:active:enabled {
    background: var(--purple800);
  }

  &:focus:enabled {
    background: var(--purple800);
  }
`;

function PostId() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (!id || isNaN(id)) {
      // ID 값이 없거나 유효하지 않으면 404 페이지로 리디렉션
      navigate('/not-found');
    }
    // ID에 해당하는 포스트를 로드하는 로직을 추가하세요.
  }, [id, navigate]);

  const handleIdData = async () => {
    try {
      const result = await getRecipient(id);
      setData(result);
    } catch (error) {
      throw new Error('데이터를 불러오지 못했습니다.', error);
    }
  };

  useEffect(() => {
    handleIdData();
  }, []);

  let profileUrl = [];
  console.log(profileUrl);
  if (data && data.recentMessages?.length > 0) {
    profileUrl = data.recentMessages.map((message) => message.profileImageURL);
  }
  return (
    <PostIdWrapper color={data.backgroundColor} image={data.backgroundImageURL}>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Nav
        name={data ? data.name : ''}
        peopleNum={data ? data.messageCount : 0}
        profileUrl={profileUrl}
      />
      <EditCard>
        <BackButton onClick={() => navigate(`/list`)}>뒤로가기</BackButton>
        <EditButton onClick={() => navigate(`/post/${data.id}/edit`)}>
          수정하기
        </EditButton>
      </EditCard>
      <CardItems data={data} />
    </PostIdWrapper>
  );
}

export default PostId;
