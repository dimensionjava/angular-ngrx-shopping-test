import { Component, OnInit } from '@angular/core';
import { Products } from '../../../../data/Products';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-grid-item',
  templateUrl: './product-grid-item.component.html',
  styleUrl: './product-grid-item.component.css'
})
export class ProductGridItemComponent implements OnInit {
  products!: Products;

   constructor(private productService: ProductService) {}

  ngOnInit(): void { // Mueve la lógica aquí
    this.loadProducts();
  }

  private loadProducts(): void {
    this.productService.getFeaturedProducts().subscribe({
      next: (resp) => {
        this.products = resp;
        console.log(this.products)
      },
      error: (err) => {
        console.error('Error al cargar productos:', err);
        // Puedes mostrar un mensaje al usuario aquí
      }
    });
  }


}
