interface ICheckParams {
  predicate: () => any;
  onSuccess: (param: string) => any;
  onFail: (param: string) => any;
}

const check = function ({ predicate, onSuccess, onFail }: ICheckParams) {
  if (predicate()) {
    onSuccess('yes');
  } else {
    onFail('no');
  }
};

export default check;
