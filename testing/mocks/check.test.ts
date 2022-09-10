import check from '@mocks/check';

describe('Check', () => {
  let onSuccess: jest.Mock<any>;
  let onFail: jest.Mock<any>;

  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it('should call onSuccess when predicate is true', () => {
    check({ predicate: () => true, onSuccess, onFail });

    expect(onSuccess).toHaveBeenCalledTimes(1);
    expect(onSuccess).toHaveBeenCalledWith('yes');
    expect(onFail).toHaveBeenCalledTimes(0);
  });
});
