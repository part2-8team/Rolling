import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button/Button';
import InputBox from '../components/InputBox';
import { createMessage } from '../api/messageApi';

function PostIdMessage() {
  return (
    <>
      <Header />
      <Container>
        <Section>
          <SectionTitle title="From." />
          <InputBox placeholder="이름을 입력해 주세요." />
        </Section>
        <Section>
          <SectionTitle title="프로필 이미지" />
        </Section>
        <Section>
          <SectionTitle title="상대와의 관계" />
        </Section>
        <Section>
          <SectionTitle title="내용을 입력해 주세요" />
        </Section>
        <Section>
          <SectionTitle title="폰트 선택" />
        </Section>

        <Button text="생성하기" width="100%" onClick={createMessage()} />
      </Container>
    </>
  );
}

export default PostIdMessage;

const Container = styled.form`
  width: 720px;
  margin: 112px auto 0 auto;
  box-sizing: border-box;
`;

const Section = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 100%;
  margin-bottom: 50px;

  &:last-child {
    margin-bottom: 38px;
  }
`;
