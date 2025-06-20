import { describe, expect, it, test } from 'bun:test';

import { helloBlankTemplate } from './index';

describe('index.ts test cases', () => {
  test('no param is passed', () => {
    const msg = helloBlankTemplate();
    expect(msg).toBe('hello @anonymous!');
  });

  it.each([
    {
      expected: 'hello main!',
      name: 'Main',
    },
    {
      expected: 'hello queue!',
      name: 'Queue',
    },
    {
      expected: 'hello mainqueue!',
      name: 'MainQueue',
    },
    {
      expected: 'hello anonymous!',
      name: 'anonymous',
    },
  ])(
    'should return the appropriate welcome message for %p ',
    ({ expected, name }) => {
      const msg = helloBlankTemplate(name);
      expect(msg).toBe(expected);
    },
  );
});
