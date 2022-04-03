import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from './producto';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {

  producto: Producto = new Producto();
  titulo: string = "Registro de Producto";


  constructor(private productoService: ProductoService, private router: Router, private activateRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.activateRoute.params.subscribe(
      c => {
        let id_producto = c['id_producto'];
        if (id_producto) {
          this.productoService.get(id_producto).subscribe(
            es => this.producto = es
          )
        }
      }
    );
  }

  create(): void {

    console.log(this.producto);
    this.productoService.create(this.producto).subscribe(
      res => this.router.navigate(['/producto'])
    )
  }


  update(): void {

    console.log(this.producto);
    this.productoService.create(this.producto).subscribe(
      res => this.router.navigate(['/producto'])
    )
  }

}
