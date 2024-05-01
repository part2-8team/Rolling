import { getRecipientsCount } from './api/recipientApi';

test('getRecipientsCount() 테스트', async () => {
  const count = await getRecipientsCount();
  expect(typeof count).toEqual('number');
});
