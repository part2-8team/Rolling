import { BASE_URL, TEAM_NUM } from './requestBase';

const recipientsBaseUrl = `${BASE_URL}/${TEAM_NUM}/recipients/`;

/**
 * 수신자(저장소) 총 갯수를 리턴합니다.
 * @return number
 */
export const getRecipientsCount = async () => {
  const response = await fetch(recipientsBaseUrl);
  if (!response.ok) {
    throw new Error('갯수를 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body['count'];
};

/**
 * 수신자(저장소) 리스트를 리턴합니다.
 * @param {
 *  {limit: string,
 *   offset: string}
 * }
 * @return 수신자 객체들이 담긴 array
 */
export const getRecipientsAll = async ({ limit, offset }) => {
  let response;
  if (limit !== null && offset !== null) {
    response = await fetch(
      `${recipientsBaseUrl}/?limit=${limit}&offset=${offset}`,
    );
  } else if (limit === null && offset !== null) {
    response = await fetch(`${recipientsBaseUrl}/?offset=${offset}`);
  } else if (offset === null && limit !== null) {
    response = await fetch(`${recipientsBaseUrl}/?limit=${limit}`);
  }

  if (!response.ok) {
    throw new Error('리스트를 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body['results'];
};

/**
 * 수신자(저장소)를 등록합니다.
 * @param {String} name
 * @param {String} backgroundColor
 * @param {String} backgroundImageURL
 * @returns 등록에 성공한 객체
 */
export const createRecipient = async (
  name,
  backgroundColor,
  backgroundImageURL,
) => {
  const formData = {
    team: '6-8',
    name,
  };

  backgroundColor
    ? (formData[backgroundImageURL] = backgroundImageURL)
    : (formData[backgroundColor] = backgroundColor);

  const response = await fetch(recipientsBaseUrl, {
    method: 'POST',
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('수신자를 등록하는데 실패했습니다.');
  }

  const body = await response.json();
  return body;
};

/**
 * id가 일치하는 수신자(저장소)를 리턴합니다.
 * @param {String} recipientsId
 * @returns 요청한 수신자 객체
 */
export const getRecipient = async (id) => {
  const paramId = String(id);
  const response = await fetch(`${recipientsBaseUrl}/${paramId}`);
  if (!response.ok) {
    throw new Error('수신자를 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body;
};

/**
 * id가 일치하는 수신자(저장소)를 삭제합니다.
 * @param {String} recipientsId
 * @returns status code 204
 */
export const deleteRecipient = async (id) => {
  const paramId = String(id);
  const response = await fetch(`${recipientsBaseUrl}/${paramId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('수신자를 삭제하는데 실패했습니다');
  }
  return response.status;
};

const reactionPath = 'reactions';

/**
 * 수신자(저장소)에 등록된 리액션 객체 배열을 리턴합니다.
 * @param {String} recipientsId
 * @returns reaction객체 array
 */
export const getReactions = async (id) => {
  const paramId = String(id);
  const response = await fetch(
    `${recipientsBaseUrl}/${paramId}/${reactionPath}/`,
  );
  if (!response.ok) {
    throw new Error('반응 리스트를 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body['results'];
};

/**
 * 리액션(이모지)을 등록합니다.
 * @param {String} recipientsId
 * @param {
 *  {"emoji": String,
 *    "type": String [increase, decrease]}
 * } formData
 * @returns 등록된 reaction 객체
 */
export const createReaction = async (id, formData) => {
  const paramId = String(id);
  const response = await fetch(
    `${recipientsBaseUrl}/${paramId}/${reactionPath}/`,
    {
      method: 'POST',
      body: formData,
    },
  );
  if (!response.ok) {
    throw new Error('반응 등록에 실패했습니다');
  }
  const body = await response.json();
  return body;
};
