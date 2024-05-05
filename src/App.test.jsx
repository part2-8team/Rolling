import { getBackgroundImages, getProfileImages } from './api/etcApi';
import {
  createRecipient,
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
  const recipientObj = await createRecipient('test', 'beige');
  expect(typeof recipientArr[0]['id']).toEqual('number');
});
