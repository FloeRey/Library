export type Product = 'apple' | 'banana' | 'orange';

export interface IStorage {
  check(product: Product): number;
  store(product: Product, quantity: number): void;
  fetch(product: Product, quantity: number): void;
}

export class WarehouseStorage implements IStorage {
  private readonly inventory = new Map<Product, number>();

  public check(product: Product): number {
    return this.inventory.get(product) ?? 0;
  }

  public store(product: Product, quantity: number): void {
    const currentQuantity = this.check(product);
    this.inventory.set(product, currentQuantity + quantity);
  }

  public fetch(product: Product, quantity: number): void {
    const currentQuantity = this.check(product);
    if (currentQuantity < quantity) {
      throw new Error(`Not enough ${product} in stock`);
    }
    this.inventory.set(product, currentQuantity - quantity);
  }
}

export class Store {
  private readonly storage: IStorage;

  public constructor(storage?: IStorage) {
    this.storage = storage ?? new WarehouseStorage();
  }

  public inventory(): { [key in Product]: number } {
    return {
      apple: this.storage.check('apple'),
      banana: this.storage.check('banana'),
      orange: this.storage.check('orange'),
    };
  }

  public buyBasket(basket: { [key in Product]?: number }): void {
    for (const [key, number] of Object.entries(basket)) {
      this.storage.fetch(key as Product, number);
    }
  }
}
