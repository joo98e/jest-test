export interface IItem {
  id: number;
  name: string;
  desc: string;
  price: number;
}

interface ICondition {
  id?: number;
}

class Stack {
  items: IItem[];

  constructor() {
    this.items = [];
  }

  /**
   * Method - generate
   */
  addItem(item: IItem) {
    return this.items.push(item);
  }
  removeItemById({ id }: ICondition) {
    return (this.items = this.items.filter((item) => item.id !== id));
  }

  removeItemByLastChild() {
    return this.items.pop();
  }

  /**
   * Method - find
   */
  findByAll() {
    return this.items;
  }

  findById({ id }: ICondition) {
    return this.items.find((item) => item.id === id);
  }
}

export default Stack;
