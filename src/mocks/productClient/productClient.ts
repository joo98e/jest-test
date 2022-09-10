class ProductClient {
  
  async fetchAllItems() {
    fetch('https://exmaple.com/item').then((res) => {
      res.json();
    });

    return [
      {
        name : "apple",
        avaliable : true
      },
      {
        name : "banana",
        avaliable : false
      },
      {
        name : "grape",
        avaliable : true
      }
    ]
  } 
}

export default ProductClient;
