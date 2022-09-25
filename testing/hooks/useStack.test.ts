/**
 * @description jest-test
 */

import Stack, { IItem } from '@hooks/stack/stack';

describe('Stack', () => {
  /**
   * Arrange, Given
   */
  let stack: Stack;
  let id: number;
  let seedItem: IItem;
  beforeEach(() => {
    id = new Date().getTime();

    stack = new Stack();
    seedItem = {
      id,
      name: 'apple',
      desc: 'it is rounded and red',
      price: 1000,
    };
  });

  /**
   * Act, When
   */

  /**
   * Assert, Then
   */

  it('initialize', () => {
    expect(stack.findByAll()).not.toBeNull();
    expect(stack.findByAll().length).toBe(0);
  });

  it('add Method', function () {
    stack.addItem(seedItem);

    expect(stack.findByAll().length).toBe(1);
    expect(stack.findById({ id })).toEqual(seedItem);
  });

  it('remove Method', function () {
    stack.addItem(seedItem);

    stack.removeItemById({ id });

    expect(stack.findByAll().length).toBe(0);
  });
});
