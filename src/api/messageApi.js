import { BASE_URL, TEAM_NUM } from './requestBase';

const messageBaseUrl = `${BASE_URL}/${TEAM_NUM}/message`;

/**
 * 하나의 메세지 객체를 리턴합니다.
 * @param {String} messageId
 * @returns 요청한 메세지 객체
 */
const getMessage = async (id) => {
  const paramId = String(id);
  const response = await fetch(`${messageBaseUrl}/${paramId}`);
  if (!response.ok) {
    throw new Error('메세지를 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body;
};

/**
 * PUT 메소드를 사용하여 메세지를 수정합니다.
 * @param {String} messageId
 * @param {
 * {"team": "6-8",
 *  "recipientId": 6676,
 *  "sender": "test",
 *  "profileImageURL": "https://image2.1004gundam.com/item_images/goods/380/1376406811.jpg",
 *  "relationship": "친구",
 *  "content": "test",
 *  "font": "Noto Sans"}
 * } formData
 * @returns 수정에 성공한 메세지 객체
 */
const putMessage = async (id, formData) => {
  const paramId = String(id);
  const response = await fetch(`${messageBaseUrl}/${paramId}`, {
    method: 'PUT',
    body: formData,
  });
  if (!response.ok) {
    throw new Error('메세지를 수정하는데 실패했습니다');
  }
  const body = await response.json();
  return body;
};

/**
 * PATCH 메소드를 사용하여 메세지를 수정합니다.
 * @param {String} messageId
 * @param {
 * {"team": "6-8",
 *  "recipientId": 6676,
 *  "sender": "test",
 *  "profileImageURL": "https://image2.1004gundam.com/item_images/goods/380/1376406811.jpg",
 *  "relationship": "친구",
 *  "content": "test",
 *  "font": "Noto Sans"}
 * } formData
 * @returns 수정에 성공한 메세지 객체
 */
const patchMessage = async (id, formData) => {
  const paramId = String(id);
  const response = await fetch(`${messageBaseUrl}/${paramId}`, {
    method: 'PUT',
    body: formData,
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
export const deleteRecipient = async (id) => {
  const paramId = String(id);
  const response = await fetch(`${messageBaseUrl}/${paramId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('수신자를 삭제하는데 실패했습니다');
  }
  return response.status;
};
