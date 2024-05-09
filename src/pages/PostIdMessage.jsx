import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button/Button';
import InputBox from '../components/InputBox';
import SelectBox from '../components/SelectBox';
import { createMessage } from '../api/messageApi';

function PostIdMessage() {
  const relationship = ['친구', '지인', '동료', '가족'];
  const fonts = ['Noto Sans', 'Pretendard', '나눔명조', '나눔손글씨 손편지체'];
  const formData = {};

  const handleSubmit = () => {
    createMessage();
  };

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
          <SelectBox options={relationship} />
        </Section>
        <Section>
          <SectionTitle title="내용을 입력해 주세요" />
        </Section>
        <Section>
          <SectionTitle title="폰트 선택" />
          <SelectBox options={fonts} />
        </Section>

        <Button text="생성하기" width="100%" onClick={handleSubmit} />
      </Container>
    </>
  );
}

export default PostIdMessage;

const Container = styled.form.attrs()`
  width: 720px;
  margin: 112px auto 24px auto;
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
