export interface IItem {
  name: string;
  available: boolean;
}

class ProductClient {
  async fetchAllItems(): Promise<IItem[]> {
    // 임시 api 요청하는 척
    fetch('https://exmaple.com/item').then((res) => {
      res.json();
    });

    return [
      {
        name: 'apple',
        available: true,
      },
      {
        name: 'banana',
        available: false,
      },
      {
        name: 'grape',
        available: true,
      },
    ];
  }

  async fetchExprary() {
    const items = fetch('https://example.com/item').then((res) => {
      res.json();
    });

    return [
      {
        name: 'tomato',
        available: false,
        expiryDate: '2022-02-12',
      },
      {
        name: 'banana',
        available: false,
        expiryDate: '2022-02-27',
      },
      {
        name: 'watermelon',
        available: false,
        expiryDate: '2022-08-28',
      },
    ];
  }
}

export default ProductClient;
