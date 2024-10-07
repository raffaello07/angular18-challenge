import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor() { }

  // Fetch products endpoint "https://fakestoreapi.com/products" using Fetch API
  getProducts(): Promise<any[]> {
  }
}
