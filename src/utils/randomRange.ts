/**
 * @param {Number} min 범위 중 최소
 * @param {Number} max 범위 중 최대
 * @returns {Number} 인자로 받은 숫자를 포함한 범위 안에서 랜덤으로 1개의 숫자를 리턴
 */
const randomRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default randomRange;
