import { Component } from '@angular/core';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [...products];

  share(product: Product): void {
    window.alert(`The product ${product.name} has been shared`);
  }

  onNotify(product: Product): void {
    window.alert(`You will be notified when ${product.name} goes on sale`);
  }
}
