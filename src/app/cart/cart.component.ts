import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.cartService.getItems();

  //forma um grupo com os atributos name e adress
  checkoutForm = this.formBuilder.group({
    name: '',
    adress: ''
  })

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
    ) { }

  removeFromCart(product: Product): void {
    this.items = this.cartService.removeProduct(product);
  }

  //Limpa o carrinho, imprime que a compra foi um sucesso no console e limpa o checkoutForm
  onSubmit(): void {
    this.items = this.cartService.clearCart();
    
    console.warn('Your order has been submited', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
