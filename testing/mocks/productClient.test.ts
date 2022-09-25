import ProductClient from '@mocks/productClient/productClient';
import ProductService from '@mocks/productClient/productService';

/**
 * mock과 stub 차이
 * mock : 가짜
 * stub : 인터페이스를 충족하게끔 가짜를 생성
 */

jest.mock('@mocks/productClient/productClient');

describe('ProductService', () => {
  const fetchAllItems = jest.fn(async () => [
    {
      name: 'apple1',
      available: true,
    },
    {
      name: 'banana2',
      available: false,
    },
    {
      name: 'grape3',
      available: true,
    },
  ]);

  const fetchExpiryItems = jest.fn(async () => [
    {
      name: 'tomato',
      available: false,
      expiryDate: '2022-02-12',
    },
  ]);

  // @ts-ignore
  ProductClient.mockImplementation(() => {
    return {
      fetchAllItems,
      fetchExpiryItems,
    };
  });

  let productService: ProductService;

  beforeEach(() => {
    productService = new ProductService();
  });

  it('ProductService is working', async () => {
    // await을 사용하지 않을 경우 Promise가 pending에 머문다.
    const isAvaliableItems = await productService.fetchAvaliableItems();

    expect(isAvaliableItems.length).toBe(2);
    // 값에 저장할 경우 참조 주소값이 다름
    expect(isAvaliableItems).toEqual([
      {
        name: 'apple1',
        available: true,
      },
      {
        name: 'grape3',
        available: true,
      },
    ]);
  });

  it('ProductService, Call have time', async () => {
    // 1번만 실행됨을 확인할 수 있던 것은 clearMocks: true 가 jest.config.ts에 저장돼있기 때문이다.
    // mock 관련된 것을 모두 실행하기 전에 초기화해준다.
    // 이것을 false로 할 경우 beforeEach로 초기화해주기

    // @ts-ignore
    ProductClient.mockClear();
    fetchAllItems.mockClear();
    await productService.fetchAvaliableItems();

    expect(fetchAllItems).toHaveBeenCalledTimes(1);
    expect(fetchAllItems).not.toHaveBeenCalledTimes(2);
  });

  it('ProductService, Call expiry items', async () => {
    const items = await productService.fetchExpiryItems();

    // @ts-ignore, date error
    const expiryDate = new Date(items[0].expiryDate);

    const today = new Date().getTime();

    /**
     * 만료일이 오늘보다 더 예전이다.
     */
    expect(expiryDate.getTime()).toBeLessThan(today);

    /**
     * 예상되는 만료일과 같다.
     */
    expect(expiryDate.toISOString().split('T')[0]).toEqual(items[0].expiryDate);
  });
});
