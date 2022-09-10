import ProductClient from '@mocks/productClient/product_client';
import ProductService from '@mocks/productClient/product_service';

jest.mock("@mocks/productClient/product_client")

describe('ProductService', () => {
  const fetchAllItems = jest.fn(async () => [
    {
      name: 'apple1',
      avaliable: true,
    },
    {
      name: 'banana2',
      avaliable: false,
    },
    {
      name: 'grape3',
      avaliable: true,
    },
  ]);

  // @ts-ignore
  ProductClient.mockImplementation(() => {
    return {
      fetchAllItems
    }
  })

  let productService: ProductService;

  beforeEach(() => {
    productService = new ProductService();
    productService.fetchAvaliableItems;
  });

  it('ProductService is working', async () => {
    // await을 사용하지 않을 경우 Promise가 pending에 머문다.
    const isAvaliableItems = await productService.fetchAvaliableItems();
    
    expect(isAvaliableItems.length).toBe(2);
    
    // git brnach
  });
});
