import Calculator from "@utils/calc";
import randomRange from "@utils/randomRange";

describe("Class Calculator inspect", () => {
  let calc: Calculator;

  beforeEach(() => {
    // 실행 전 1번씩 실행
    // afterEach
    calc = new Calculator();
  });

  describe("basically function", () => {
    it("init with 0", () => {
      expect(calc.getNum()).toBe(0);
    });

    it("init with n", () => {
      const n = randomRange(1, 1000);
      
      const _calc: Calculator = new Calculator(n);
      expect(_calc.getNum()).toBe(_calc.getNum());
    });

    it("set num", () => {
      expect(calc.setNum(randomRange(1, 1000))).toBe(calc.getNum());
    });

    it("clear", async () => {
      calc.clear();
      expect(calc.getNum()).toBe(0);
      expect(calc.getNum()).not.toBeNull();
      expect(calc.getNum()).not.toBeUndefined();
    });
  });

  describe("timeout", () => {
    it("is not timeout(1000ms)", async () => {
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(1);
        }, 500);
      });

      let result = await promise;
      expect(result).toBe(1);
    }, 1000);
  });

  describe("methods", () => {
    it("add", () => {
      calc.add(1);
      expect(calc.getNum()).toBe(1);
    });
  });
});
