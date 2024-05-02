import { BASE_URL, TEAM_NUM } from './requestBase';

const recipientsBaseUrl = `${BASE_URL}/${TEAM_NUM}/recipients/`;
const messageBaseUrl = `${BASE_URL}/${TEAM_NUM}/message`;
const messagePath = 'messages';

/**
 * 수신자(저장소)에 저장된 메세지들을 배열로 리턴합니다.
 * @param {
 *  { limit: string,
 *    offset: string,
 *    id: recipientId
 *  }
 * } param
 * @returns 메세지 객체들이 담긴 array
 */
export const getMessageAll = async ({ limit, offset, recipientId }) => {
  const paramId = String(recipientId);
  let response;

  if (limit !== null && offset !== null) {
    response = await fetch(
      `${recipientsBaseUrl}/${paramId}/${messagePath}/?limit=${limit}&offset=${offset}`,
    );
  } else if (limit === null && offset !== null) {
    response = await fetch(
      `${recipientsBaseUrl}/${paramId}/${messagePath}/?offset=${offset}`,
    );
  } else if (offset === null && limit !== null) {
    response = await fetch(
      `${recipientsBaseUrl}/${paramId}/${messagePath}/?limit=${limit}`,
    );
  }

  if (!response.ok) {
    throw new Error('리스트를 불러오는데 실패했습니다');
  }

  const body = response.json();
  return body['results'];
};

/**
 * 메세지를 등록합니다.
 * @param {Number} recipientId
 * @param {String} sender
 * @param {String} profileImageURL
 * @param {String} relationship
 * @param {String} content
 * @param {String} font
 * @returns 등록된 메세지 객체 반환
 */
export const createMessage = async (
  recipientId,
  sender,
  profileImageURL,
  relationship,
  content,
  font,
) => {
  const paramId = String(id);
  const formData = {
    team: '6-8',
    recipientId,
    sender,
    profileImageURL,
    relationship,
    content,
    font,
  };

  const response = await fetch(
    `${recipientsBaseUrl}/${paramId}/${messagePath}/`,
    {
      method: 'POST',
      body: JSON.stringify(formData),
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
  const paramId = String(messageId);
  const response = await fetch(`${messageBaseUrl}/${paramId}/`);
  if (!response.ok) {
    throw new Error('메세지를 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body;
};

/**
 * PUT 메소드를 사용하여 메세지를 수정합니다.
 * @param {Number} messageId
 * @param {Number} recipientId
 * @param {
 * {sender : String,
 *  profileImageURL : String,
 *  relationship : String,
 *  content : String,
 *  font : String}
 * } dataObj
 * @returns 수정에 성공한 메세지 객체
 */
export const putMessage = async (messageId, recipientId, dataObj) => {
  const paramId = String(messageId);
  const formData = {
    team: '6-8',
    recipientId,
  };

  for (let key in dataObj) {
    formData[key] = dataObj[key];
  }

  const response = await fetch(`${messageBaseUrl}/${paramId}/`, {
    method: 'PUT',
    body: JSON.stringify(formData),
  });
  if (!response.ok) {
    throw new Error('메세지를 수정하는데 실패했습니다');
  }
  const body = await response.json();
  return body;
};

/**
 * PATCH 메소드를 사용하여 메세지를 수정합니다.
 * @param {Number} messageId
 * @param {Number} recipientId
 * @param {
 * {sender : String,
 *  profileImageURL : String,
 *  relationship : String,
 *  content : String,
 *  font : String}
 * } dataObj
 * @returns 수정에 성공한 메세지 객체
 */
export const patchMessage = async (messageId, recipientId, dataObj) => {
  const paramId = String(messageId);
  const formData = {
    team: '6-8',
    recipientId,
  };

  for (let key in dataObj) {
    formData[key] = dataObj[key];
  }

  const response = await fetch(`${messageBaseUrl}/${paramId}/`, {
    method: 'PUT',
    body: JSON.stringify(formData),
  });
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
export const deleteRecipient = async (messageId) => {
  const paramId = String(messageId);
  const response = await fetch(`${messageBaseUrl}/${paramId}/`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('수신자를 삭제하는데 실패했습니다');
  }
  return response.status;
};
