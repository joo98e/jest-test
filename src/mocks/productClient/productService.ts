import ProductClient, { IItem } from './productClient';

class ProductService {
  client: ProductClient;

  constructor() {
    this.client = new ProductClient();
  }

  async fetchAvaliableItems() {
    return this.client
      .fetchAllItems()
      .then((items: IItem[]) => items.filter((item) => item.available));
  }

  async fetchExpiryItems() {
    return this.client.fetchExpiryItems();
  }
}

export default ProductService;
