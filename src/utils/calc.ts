export default class Calculator {
  private num: number;

  constructor(num?: number) {
    this.num = num ?? 0;
  }

  getNum() {
    return this.num;
  }

  setNum(num: number) {
    return (this.num = num);
  }

  clear() {
    return (this.num = 0);
  }

  add(nextNum: number) {
    return (this.num += nextNum);
  }

  subtract(nextNum: number) {
    return (this.num -= nextNum);
  }

  multiply(nextNum: number) {
    return (this.num *= nextNum);
  }

  divide(nextNum: number) {
    return (this.num /= nextNum);
  }
}
