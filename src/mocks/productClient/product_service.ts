import ProductClient from './product_client';

class ProductService {
  client: ProductClient;

  constructor() {
    this.client = new ProductClient();
  }

  async fetchAvaliableItems() {
    return this.client
      .fetchAllItems()
      .then((items) => items.filter((item) => item.avaliable));
  }
}

export default ProductService;
