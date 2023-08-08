export interface User {
  userID?: string;
  first_name: string;
  last_name: string;
  email: string;
  password?: string;
  address?: Address;
  phoneNumber?: string;
}

export interface Address {
  city: string;
  state: string;
  country: string;
  street: string;
  number: string;
}

export interface Item {
  itemID: string;
  name: string;
  description: string;
  price: number;
  quantityInStock: number;
  categoryID: string;
  subcategoryID: string;
  image: string;
}

export interface Category {
  categoryID: string;
  name: string;
  description: string;
  image: string;
}

export interface Subcategory {
  subcategoryID: string;
  name: string;
  description: string;
  categoryID: string;
  image: string;
}

export interface Order {
  orderID: string;
  userID: string;
  totalPrice: number;
  orderStatus: 'Pending' | 'Shipped' | 'Delivered';
  orderDate: Date;
  shippingAddress: string;
  paymentMethodID: string;
}

export interface OrderItem {
  orderItemID: string;
  orderID: string;
  itemID: string;
  quantity: number;
  price: number;
}

export interface PaymentMethod {
  paymentMethodID: string;
  userID: string;
  cardNumber: string;
  expirationDate: Date;
  CVV: number;
  billingAddress: string;
}

export interface Cart {
  cartID: string;
  userID: string;
}

export interface CartItem {
  cartItemID: string;
  cartID: string;
  itemID: string;
  quantity: number;
}


