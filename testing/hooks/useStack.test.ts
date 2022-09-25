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

  it('remove Last Item', function () {
    stack.addItem(seedItem);
    stack.addItem({
      id: new Date().getTime(),
      name: 'banana',
      desc: 'is longer and yellow',
      price: 2000,
    });

    // 지우기 전 length 2
    expect(stack.findByAll().length).toBe(2);

    stack.removeItemByLastChild();

    // 지우기 후 length 1
    expect(stack.findByAll().length).toBe(1);
    // 먼저 넣어두었던 seed Item get 가능
    expect(stack.findById({ id })).toEqual(seedItem);
  });
});
