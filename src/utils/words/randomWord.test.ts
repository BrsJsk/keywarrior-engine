import { getRandomWord } from './randomWord';

describe('randomWord', () => {
  test('should return a string', () => {
    expect(getRandomWord()).toBeTruthy();
  });
});
