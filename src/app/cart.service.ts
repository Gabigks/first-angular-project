import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  addToCart(product: Product): void {
    if(this.items.find(item => item.id === product.id)) {
      product.count++;
      return;
    }
    product.count++;
    this.items.push(product);
  }

  removeProduct(product: Product): Product[] {
    if(product.count > 1){
      product.count--;
      return this.items;
    }
    return this.items = this.items.filter(prod => prod.id !== product.id);
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart(): Product[] {
    this.items = [];
    return this.items;
  }

  //.get do HttpCliente para capturar um array de objetos com propriedades type e price, que será capturada na url '/assets/shipping.json'
  getShippingPrices(): Observable<{type: string, price: number}[]> {
    return this.http.get<{type: string, price: number}[]>
      ('/assets/shipping.json');
  }
}
