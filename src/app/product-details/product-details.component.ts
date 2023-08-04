import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    ){ }

  ngOnInit(): void {
    // Primeiro pera o id do produto da rota atual
    const routeParams = this.route.snapshot.paramMap;
    /*Os parâmetros de rota correspondem às path variables que você define na rota > no app.module
    Para acessar os parâmetros da rota, usamos route.snapshot, que é o ActivatedRouteSnapshot 
    que contém informações sobre a rota ativa naquele momento específico. A URL que corresponde à rota fornece o productId, que no caso
    foi definida como variável da rota no app.module, e o Angular usa o productId para exibir os detalhes de cada produto exclusivo.*/
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Encontra o produto que corresponde ao id provido da rota
    this.product = products.find(product => product.id === productIdFromRoute)
  }

  addToCart(product: Product): void{
    this.cartService.addToCart(product);
    window.alert(`${product.name} has been added to cart!`);
  }
}
