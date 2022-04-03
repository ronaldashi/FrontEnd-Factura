import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  titulo: string = "Lista de producto";
  prueba: string = 'Esto es una prueba';

  producto: Producto[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {

    this.productoService.producto().subscribe(

      c => this.producto = c

    );
  }

  delete(producto: Producto): void {
    console.log("Hello");
    this.productoService.delete(producto.id_producto).subscribe(

      c => this.productoService.producto().subscribe(
        res => this.producto = res
      )
    )
  }

}
