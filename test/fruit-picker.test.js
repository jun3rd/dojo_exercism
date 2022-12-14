// @ts-check

import { notify } from './notifier';
import { order } from './grocer';
import { onError, onSuccess, orderFromGrocer, postOrder } from './fruit-picker';

jest.mock('./notifier', () => ({
  notify: jest.fn(),
}));

jest.mock('./grocer', () => ({
  order: jest.fn(),
}));

afterEach(() => {
  jest.resetAllMocks();
});

describe.skip('task 1', () => {
  test('onSuccess should call notify with a success message', () => {
    expect(onSuccess()).toEqual(undefined);
    expect(notify).toHaveBeenCalledTimes(1);
    expect(notify).toHaveBeenCalledWith({ message: 'SUCCESS' });
  });
});

describe.skip('task 2', () => {
  test('onError should call notify with an error message', () => {
    expect(onError()).toEqual(undefined);
    expect(notify).toHaveBeenCalledTimes(1);
    expect(notify).toHaveBeenCalledWith({ message: 'ERROR' });
  });
});

describe.skip('task 3', () => {
  test('order from grocer passes callback function arguments forward', () => {
    const query = { variety: 'apple', quantity: 10 };
    orderFromGrocer(query, onSuccess, onError);
    expect(order).toHaveBeenCalledTimes(1);
    expect(order).toHaveBeenCalledWith(query, onSuccess, onError);
  });
});

describe.skip('task 4', () => {
  test('postOrder composes a request to the grocer using the defined callbacks', () => {
    const variety = 'banana';
    const quantity = 5;
    postOrder(variety, quantity);

    expect(order).toHaveBeenCalledTimes(1);
    expect(order).toHaveBeenCalledWith(
      { variety, quantity },
      onSuccess,
      onError
    );
  });
});
