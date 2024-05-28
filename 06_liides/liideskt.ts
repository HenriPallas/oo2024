interface Product {
    id: number;
    name: string;
    price: number;
}

class CartItem implements Product {
  id: number;
  name: string;
  price: number;
  quantity: number;

  constructor(id:number, name:string, price:number, quantity:number = 1){
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalPrice(): number{
    return this.price * this.quantity;
  }
}

class ShoppingCart {
  items: CartItem[];

  constructor() {
    this.items = [];
  }

  addItem(item: CartItem): void {
    this.items.push(item);
  }

  removeItem(itemId: number): void {
    this.items = this.items.filter(item => item.id !== itemId);
  }

  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  checkout(): void {
    console.log("Checkout completed. Thank you for shopping!");
   }
}

const product1 = new CartItem(1, "Product 1", 10);
const product2 = new CartItem(2, "Product 2", 20);

const cart = new ShoppingCart();

cart.addItem(product1);
cart.addItem(product2);

cart.removeItem(1);

console.log("Total Price:", cart.getTotalPrice());

cart.checkout();