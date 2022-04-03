import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../factura/factura.service';
import { Detalle } from './detalle';
import { DetalleService } from './detalle.service';
import { ProductoService } from '../producto/producto.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  titulo: string = "Lista de detalle";
  

  facturas: any[] = [];
  clienteElegido: any = null;
  detalles: any[] = [];
  productos: any[] = [];

  constructor(private facturaService: FacturaService,private detalleService: DetalleService,private productoService: ProductoService) { }

  ngOnInit(): void {

    this.listarFactura();
    this.listarDetalle();
    this.listarProductos();

  }

  listarFactura(): void {
    this.facturaService.facturas().subscribe(
      data => {
        this.facturas = data;
      },
      err => {
        console.log(err);
      }

    );
  }

  listarProductos(): void {
    this.productoService.producto().subscribe(
      data => {
        this.productos = data;
      },
      err => {
        console.log(err);
      }

    );
  }

  listarDetalle(): void {
    this.detalleService.detalle().subscribe(

      data => {
        this.detalles = data;
      },
      err => {
        console.log(err);
      }
    );
  }


  delete(detalle: Detalle): void {
    console.log("Hello");
    this.detalleService.delete(detalle.num_detalle).subscribe(

      c => this.detalleService.detalle().subscribe(
        res => this.detalles = res
      )
    )
  }

}
