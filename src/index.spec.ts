import { describe, expect, it, test } from 'bun:test';

import { helloBlankTemplate } from './index';

describe('index.ts test cases', () => {
  test('no param is passed', () => {
    const msg = helloBlankTemplate();
    expect(msg).toBe('hello @anonymous!');
  });

  it.each([
    {
      name: 'Main',
      expected: 'hello main!',
    },
    {
      name: 'Queue',
      expected: 'hello queue!',
    },
    {
      name: 'MainQueue',
      expected: 'hello mainqueue!',
    },
    {
      name: 'anonymous',
      expected: 'hello anonymous!',
    },
  ])(
    'should return the appropriate welcome message for %p ',
    ({ name, expected }) => {
      const msg = helloBlankTemplate(name);
      expect(msg).toBe(expected);
    },
  );
});
