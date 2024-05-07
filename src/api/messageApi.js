import { BASE_URL, TEAM_NUM } from './requestBase';

const recipientsBaseUrl = `${BASE_URL}/${TEAM_NUM}/recipients`;
const messageBaseUrl = `${BASE_URL}/${TEAM_NUM}/message`;
const messagePath = 'messages';

/**
 * 수신자(저장소)에 저장된 메세지들을 배열로 리턴합니다.
 * @param {Number} recipientId
 * @param {Number} offset
 * @param {Number} limit
 * @returns 메세지가 담긴 객체
 */
export const getMessageAll = async (recipientId, offset = 0, limit = 0) => {
  const response = await fetch(
    `${recipientsBaseUrl}/${recipientId}/${messagePath}/?limit=${limit}&offset=${offset}`,
  );

  if (!response.ok) {
    throw new Error('리스트를 불러오는데 실패했습니다');
  }

  const body = response.json();
  return body;
};

/**
 * 메세지를 등록합니다.
 * @param {String} recipientId
 * @param {Object} data
 * @returns 등록된 메세지 객체 반환
 */
export const createMessage = async (recipientId, data) => {
  const response = await fetch(
    `${recipientsBaseUrl}/${recipientId}/${messagePath}/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        team: '6-8',
        ...data,
      }),
    },
  );
  if (!response.ok) {
    throw new Error('메세지를 저장하는데 실패했습니다');
  }
  const body = await response.json();
  return body;
};

/**
 * 하나의 메세지 객체를 리턴합니다.
 * @param {String} messageId
 * @returns 요청한 메세지 객체
 */
export const getMessage = async (messageId) => {
  const response = await fetch(
    `${BASE_URL}/${TEAM_NUM}/${messagePath}/${messageId}/`,
  );
  if (!response.ok) {
    throw new Error('메세지를 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body;
};

/**
 * PUT 메소드를 사용하여 메세지를 수정합니다.
 * @param {Number} messageId
 * @param {Object} data
 * @returns 수정에 성공한 메세지 객체
 */
export const putMessage = async (messageId, data) => {
  const response = await fetch(
    `${BASE_URL}/${TEAM_NUM}/${messagePath}/${messageId}/`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        team: '6-8',
        ...data,
      }),
    },
  );
  if (!response.ok) {
    throw new Error('메세지를 수정하는데 실패했습니다');
  }
  const body = await response.json();
  return body;
};

/**
 * PATCH 메소드를 사용하여 메세지를 수정합니다.
 * @param {Number} messageId
 * @param {Object} data
 * @returns 수정에 성공한 메세지 객체
 */
export const patchMessage = async (messageId, data) => {
  const response = await fetch(
    `${BASE_URL}/${TEAM_NUM}/${messagePath}/${messageId}/`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        team: '6-8',
        ...data,
      }),
    },
  );
  if (!response.ok) {
    throw new Error('메세지를 수정하는데 실패했습니다');
  }
  const body = await response.json();
  return body;
};

/**
 * id가 일치하는 메세지를 삭제합니다.
 * @param {String} messageId
 * @returns status code 204
 */
export const deleteMessage = async (messageId) => {
  const response = await fetch(
    `${BASE_URL}/${TEAM_NUM}/${messagePath}/${messageId}/`,
    {
      method: 'DELETE',
    },
  );
  if (!response.ok) {
    throw new Error('메세지를 삭제하는데 실패했습니다');
  }
  return response.status;
};
