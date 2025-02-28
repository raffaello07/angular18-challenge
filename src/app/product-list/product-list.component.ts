import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  products: any[] = [];
  sortedBy: string = '';

  // Inject the ProductService
  constructor() { }

  // Fetch products when the component initializes

  // Fetch products via the service
  fetchProducts(): void {
  }

  // Sort products by price
  sortByPrice(): void {
  }

  // Sort products by name
  sortByName(): void {
  }
}
