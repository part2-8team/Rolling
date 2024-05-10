import { getBackgroundImages, getProfileImages } from './api/etcApi';
import {
  createMessage,
  deleteMessage,
  getMessage,
  getMessageAll,
  patchMessage,
  putMessage,
} from './api/messageApi';
import {
  createReaction,
  createRecipient,
  deleteRecipient,
  getReactions,
  getRecipient,
  getRecipientsAll,
  getRecipientsCount,
} from './api/recipientApi';

// etc api test
test('getBackgroundImages() 테스트', async () => {
  const imgArr = await getBackgroundImages();
  const img = imgArr[0];
  expect(typeof img).toEqual('string');
});

test('getProfileImages() 테스트', async () => {
  const imgArr = await getProfileImages();
  const img = imgArr[0];
  expect(typeof img).toEqual('string');
});

// recipient api test
test('getRecipientsCount() 테스트', async () => {
  const count = await getRecipientsCount();
  expect(typeof count).toEqual('number');
});

test('getRecipientsAll() 테스트', async () => {
  const query = { limit: 1, offset: 1 };
  const recipientArr = await getRecipientsAll(query);
  expect(typeof recipientArr[0]['id']).toEqual('number');
});

test('createRecipient() 테스트', async () => {
  const dataObj = { name: 'test', backgroundColor: 'beige' };
  const recipientObj = await createRecipient(dataObj);
  expect(recipientObj.backgroundColor).toEqual('beige');
});

test('getRecipient() 테스트', async () => {
  const recipientObj = await getRecipient(6817);
  expect(recipientObj.backgroundColor).toEqual('beige');
});

test('deleteRecipient() 테스트', async () => {
  const status = await deleteRecipient(6808);
  expect(status).toEqual(204);
});

test('getReactions() 테스트', async () => {
  const reactionArr = await getReactions(6817);
  expect(reactionArr[0].id).toEqual(6860);
});

test('createReaction() 테스트', async () => {
  const reactionObj = await createReaction(6817, {
    emoji: 'string',
    type: 'increase',
  });
  expect(reactionObj.recipient_id).toEqual(6817);
});

// message api test
test('getMessageAll() 테스트', async () => {
  const reactionObj = await getMessageAll(6676);
  expect(reactionObj.count).toEqual(2);
});

test('createMessage() 테스트', async () => {
  const reactionObj = await createMessage(6817, {
    team: 'string',
    recipientId: 6817,
    sender: 'string',
    profileImageURL:
      'https://image2.1004gundam.com/item_images/goods/380/1376406811.jpg',
    relationship: '친구',
    content: 'string',
    font: 'Noto Sans',
  });
  expect(reactionObj.relationship).toEqual('친구');
});

test('getMessage() 테스트', async () => {
  const reactionObj = await getMessage(12064);
  expect(reactionObj.id).toEqual(12064);
});

test('putMessage() 테스트', async () => {
  const reactionObj = await putMessage(12064, {
    team: '6-8',
    recipientId: 6817,
    sender: 'put',
    profileImageURL:
      'https://image2.1004gundam.com/item_images/goods/380/1376406811.jpg',
    relationship: '친구',
    content: 'put',
    font: 'Noto Sans',
  });
  expect(reactionObj.sender).toEqual('put');
});

test('patchMessage() 테스트', async () => {
  const reactionObj = await patchMessage(12064, {
    team: '6-8',
    recipientId: 6817,
    sender: 'patch',
    profileImageURL:
      'https://image2.1004gundam.com/item_images/goods/380/1376406811.jpg',
    relationship: '친구',
    content: 'patch',
    font: 'Noto Sans',
  });
  expect(reactionObj.sender).toEqual('patch');
});

test('deleteMessage() 테스트', async () => {
  const status = await deleteMessage(12338);
  expect(status).toEqual(204);
});
