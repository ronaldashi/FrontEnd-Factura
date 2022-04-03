import { Component, OnInit } from '@angular/core';
import { Factura } from './factura';
import { FacturaService } from './factura.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../clientes/cliente';
import { ClienteService } from '../clientes/cliente.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  titulo: string = "Lista de facturas";


  facturas: any[] = [];
  clienteElegido: any = null;
  clientes: any[] = [];


  constructor(private facturaService: FacturaService, private clienteService: ClienteService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.listarCliente();
    this.listarFactura();

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

  listarCliente(): void {
    this.clienteService.cliente().subscribe(

      data => {
        this.clientes = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  delete(factura: Factura): void {
    console.log("Hello");
    this.facturaService.delete(factura.num_factura).subscribe(

      c => this.facturaService.facturas().subscribe(
        res => this.facturas = res
      )
    )
  }

}
