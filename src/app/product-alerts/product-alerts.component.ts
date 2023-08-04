import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {

  //O valor dessa propriedade será passada pelo pai do componente > ProductListComponent
  @Input() product: Product | undefined;
  //Emite um evento para o componente pai (ProductListComponent) quando o valor de notify for alterado 
  @Output() notify = new EventEmitter();

}
