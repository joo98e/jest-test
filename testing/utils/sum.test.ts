import sum from "@utils/sum";

describe("Utils Function Test", () => {
  test("sum 함수 테스트", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
