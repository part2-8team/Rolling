import { BASE_URL } from './requestBase';

/**
 * 배경 이미지 경로 문자열이 담긴 배열을 리턴합니다.
 * @returns array
 */
export const getBackgroundImages = async () => {
  const response = await fetch(`${BASE_URL}/background-images/`);
  if (!response.ok) {
    throw new Error('배경이미지를 가져오는데 실패했습니다.');
  }
  const body = await response.json();
<<<<<<< HEAD
  return body['imageUrls'];
=======
  const result = body['imageUrls'];
  return result;
>>>>>>> 2c5e32b (feat: #38 profile image ui 완성)
};

/**
 * 프로필 이미지 경로 문자열이 담긴 배열을 리턴합니다.
 * @returns array
 */
export const getProfileImages = async () => {
  const response = await fetch(`${BASE_URL}/profile-images/`);
  if (!response.ok) {
    throw new Error('프로필이미지를 가져오는데 실패했습니다.');
  }
  const body = await response.json();
<<<<<<< HEAD
  return body['imageUrls'];
=======
  const result = body['imageUrls'];
  return result;
>>>>>>> 2c5e32b (feat: #38 profile image ui 완성)
};
