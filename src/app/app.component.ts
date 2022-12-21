import { Component } from '@angular/core';
import { ProductModel } from './models/product';
import { ProductService } from './Services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bilgehanbasar';
  product:  ProductModel[] = [];


  constructor(private productService : ProductService){}

  ngOnInit(): void{
    this.productService
    .getProducts()
    .subscribe((resut: ProductModel[]) => (this.product = resut));
  }
  

}

